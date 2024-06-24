import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import BriefDescription from './BriefDiscription';
import LoadingBar from 'react-top-loading-bar';

const JobsTable = () => {
  const [jobsData, setJobsData] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  const [currentCustomer, setCurrentCustomer] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadingBarRef = useRef(null);

  const retrieveJobs = async () => {
    loadingBarRef.current.continuousStart();
    try {
      const response = await axios.post('jobsget');
      if (response.status === 200) {
        setJobsData(response.data);
        
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to retrieve data');
    } finally {
      loadingBarRef.current.complete();
    }
  };

  const handleRowClick = (job, customer) => {
    setCurrentJob(job);
    setCurrentCustomer(customer);
    setShowTable(false);
    setShowDetails(true);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    if (direction === 'next') {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(totalJobs / itemsPerPage)));
    } else if (direction === 'prev') {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  useEffect(() => {
    retrieveJobs();
  }, []);


  const filteredJobsData = jobsData
    .map((data) => ({
      ...data,
      jobs: data.jobs.filter(
        (job) =>
          job.id.toString().includes(searchTerm) ||
          data.customer.cus_id.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((data) => data.jobs.length > 0);


  const totalJobs = filteredJobsData.reduce((acc, cur) => acc + cur.jobs.length, 0);


  let allJobs = filteredJobsData.flatMap((data) =>
    data.jobs.map((job) => ({ job, customer: data.customer }))
  );


  allJobs = allJobs.reverse();


  const paginatedJobs = allJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <LoadingBar color="#f11946" ref={loadingBarRef} />
      {showTable && (
        <div className="bg-white p-8 rounded-md w-full">
          <ToastContainer />
          <div className="flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">Jobs List</h2>
              <span className="text-xs ml-1">All jobs</span>
            </div>
            <div className="flex items-center">
            <i class='bx bx-search-alt-2 text-3xl mr-1'></i>
              <input
                type="text"
                className="border p-2 rounded placeholder:text-[10px]"
                placeholder="Search by Cus-id or Job no"
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
                        J.NO
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Customer Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Given Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Due Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Job Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedJobs.map(({ job, customer }, index) => (
                      <tr
                        key={index}
                        className="hover:bg-blue-100 cursor-pointer"
                        onClick={() => handleRowClick(job, customer)}
                      >
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{job.id}</td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{customer.name}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {job.gdate ? new Date(job.gdate).toLocaleDateString() : '-'}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {job.ddate ? new Date(job.ddate).toLocaleDateString() : '-'}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{customer.pnumber}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{job.type}</td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{job.status || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing {Math.min(currentPage * itemsPerPage, totalJobs)} of {totalJobs} Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button
                      onClick={() => handlePageChange('prev')}
                      className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button
                      onClick={() => handlePageChange('next')}
                      className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                      disabled={currentPage === Math.ceil(totalJobs / itemsPerPage)}
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
      {showDetails && <BriefDescription job={currentJob} customer={currentCustomer} />}
    </>
  );
};

export default JobsTable;
