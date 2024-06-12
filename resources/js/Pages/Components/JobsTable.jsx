import React from 'react'

const JobsTable = () => {
  return (
    <>
    <div className="bg-white p-8 rounded-md w-full">
  <div className=" flex items-center justify-between pb-6">
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
            <th className="px-5  py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
          <tbody >
           <tr className='hover:bg-blue-100'>
              <td className="px-5  py-5 border-b border-gray-200  text-sm">
               1
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Akilesh</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">March 7, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">9003288844</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                Desktop
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                Finished
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                2
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Suresh</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 01, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Feb 01, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">9003288844</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                Desktop
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                Finished
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                3
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Ramesh</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 10, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Feb 10, 2020</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="text-gray-900 whitespace-no-wrap">9003288844</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                Monitor
              </td>
              <td className="px-5 py-5 border-b border-gray-200  text-sm">
                Finished
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 bg-white text-sm">
               4
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Boobesh</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Feb 19, 2020</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">9003288844</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                Laptop
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                Finished
              </td>
            </tr>
          </tbody>
        </table>
        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
          <span className="text-xs xs:text-sm text-gray-900">
            Showing 1 to 4 of 50 Entries
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

    </>
  )
}

export default JobsTable
