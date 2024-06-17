import React, { useEffect, useState, useRef } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import BriefCustomer from './BriefCustomer';
import LoadingBar from 'react-top-loading-bar';

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);
  const [filteredCustomerData, setFilteredCustomerData] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const loadingBarRef = useRef(null);

  useEffect(() => {
    getCustomerDetails();
  }, []);

  const getCustomerDetails = async () => {
    loadingBarRef.current.continuousStart();
    try {
      const response = await axios.post('customerget');
      if (response.status === 200) {
        setCustomerData(response.data);
        setFilteredCustomerData(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to retrieve data');
    } finally {
      loadingBarRef.current.complete();
    }
  };

  const handleRowClick = (customer) => {
    setCurrentCustomer(customer);
    setShowTable(false);
    setShowDetails(true);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term === '') {
      setFilteredCustomerData(customerData);
    } else {
      const filteredData = customerData.filter(
        (customer) =>
          customer.cus_id.includes(term) || customer.pnumber.toString().includes(term)
      );
      setFilteredCustomerData(filteredData);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const totalEntries = filteredCustomerData.length;
  const currentEntries = filteredCustomerData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <>
      <LoadingBar color="#f11946" ref={loadingBarRef} />
      {showTable && (
        <div className="bg-white p-8 rounded-md w-full">
          <ToastContainer />
          <div className="flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">Customer List</h2>
              <span className="text-xs ml-1">All customers</span>
            </div>
            <div className="flex items-center">
            <i class='bx bx-search-alt-2 text-3xl mr-1'></i>
              <input
                type="text"
                className="border p-2 rounded placeholder:text-[10px]"
                placeholder="Search by Cus-id or Phone Number"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Cus-id
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Customer Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Phone Number
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        WhatsApp
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentEntries.map((customer) => (
                      <tr key={customer.id} onClick={() => handleRowClick(customer)} className="cursor-pointer">
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {customer.cus_id}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {customer.name}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {customer.pnumber}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {customer.email}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {customer.address}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {customer.wnumber}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing {(currentPage - 1) * entriesPerPage + 1} to{' '}
                    {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button
                      className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button
                      className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                      onClick={handleNextPage}
                      disabled={currentPage * entriesPerPage >= totalEntries}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDetails && <BriefCustomer customer={currentCustomer} />}
    </>
  );
};

export default CustomerTable;
