import React from 'react'

const BriefDiscription = () => {
  return (
    <>
  {/* This is an example component */}
  <div className="min-h-screen flex items-center justify-center px-4">
  <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
      
      <div className="p-4 border-b flex justify-between">
        <div>
          <h2 className="text-2xl ">Job Information</h2>
          <p className="text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="text-2xl text-gray-500">
          Job Status: Finished
        </div>
      </div>


      <div>
      <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Job No</p>
          <p>5001</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Full name</p>
          <p>Suman</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Given Date</p>
          <p>22.10.13</p>
        </div>

        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Contact No</p>
          <p>9962102114</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">WhatsApp No</p>
          <p>-</p>

        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Email Address</p>
          <p>-</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Address</p>
          <p>SV Koil street</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Type</p>
          <p>Monitor LED</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Accessories / Configuration</p>
          <p>Pentium 4, Millenium 865 Board, 80GB hdd, 512 RAM,</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">11 - Product S.No</p>
          <p>Charger CT- WDJBP0A1R7W8DQ Laptop SN : CND433348B</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Problem Report by the CUSTOMER</p>
          <p>Auto on off</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Action Taken</p>
          <p>Control PCB Switches Changed</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Return Condition</p>
          <p>Returned / Good</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Deliver Date</p>
          <p>23.10.13</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">16- Rough Estimate</p>
          <p>-</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Amount Break-up </p>
          <p>600</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Final Amount</p>
          <p>-</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Cash Mode</p>
          <p>-</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Remarks for MSS</p>
          <p>Done at SASI COMP</p>
        </div>

        
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
          <p className="text-gray-600">Attachments</p>
          <div className="space-y-2">
            <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
              <div className="space-x-2 truncate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current inline text-gray-500"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                </svg>
                <span>JobCard.pdf</span>
              </div>
              <a href="#" className="text-indigo-600 hover:underline">
                Download
              </a>
            </div>
            <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
              <div className="space-x-2 truncate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current inline text-gray-500"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                </svg>
                <span>Delivery.pdf</span>
              </div>
              <a href="#" className="text-indigo-600 hover:underline">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</>

  )
}

export default BriefDiscription