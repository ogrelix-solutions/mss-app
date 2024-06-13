import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import BriefDescription from './BriefDiscription';

const JobsTable = () => {
  const [jobsData, setJobsData] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  const [currentCustomer, setCurrentCustomer] = useState({});

  const retrieveJobs = async () => {
    try {
      const response = await axios.post('jobsget');
      if (response.status === 200) {
        setJobsData(response.data);
        toast.success('Data Retrieved!');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to retrieve data');
    }
  };

  const handleRowClick = (job, customer) => {
    setCurrentJob(job);
    setCurrentCustomer(customer);
    setShowTable(false);
    setShowDetails(true);
  };

  useEffect(() => {
    retrieveJobs();
  }, []);

  return (
    <>
      {showTable && (
        <div className="bg-white p-8 rounded-md w-full">
          <ToastContainer />
          <div className="flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">Jobs List</h2>
              <span className="text-xs ml-1">All jobs</span>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                    {jobsData.map((data, index) =>
                      data.jobs.map((job, jobIndex) => (
                        <tr
                          key={`${index}-${jobIndex}`}
                          className="hover:bg-blue-100 cursor-pointer"
                          onClick={() => handleRowClick(job, data.customer)}
                        >
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            {job.id}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{data.customer.name}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{job.gdate ? new Date(job.gdate).toLocaleDateString() : '-'}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{job.ddate ? new Date(job.ddate).toLocaleDateString() : '-'}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{data.customer.pnumber}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            {job.type}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            {job.jobstatus || '-'}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing 1 to {jobsData.reduce((acc, cur) => acc + cur.jobs.length, 0)} of {jobsData.reduce((acc, cur) => acc + cur.jobs.length, 0)} Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
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
