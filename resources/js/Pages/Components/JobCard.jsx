import React from "react"

const JobCard = () => {
    return(
<>
<div className="min-h-screen flex items-center justify-center px-4">
<div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
<div >
<h1 className="text-[2.5rem] font-bold text-black  text-center md:space-y-0 space-y-1 p-2 border-b  ">
 MULTISOLUTIONS AND SYSYTEMS</h1>		
<p className="font-extrabold text-center md:space-y-0 space-y-1 p-2 border-b ">
#1, Gangai Street, Balaji Nagar, Irumbuliyur, East Tambaram, Chennai -59
</p>	
<p className="font-bold text-center md:space-y-0 space-y-1 p-2 border-b">
Cell : 98409 81945, 9677269955, multisolutionssystems@gmail.com								 
</p>			
<h2 className="font-extrabold text-center text-2xl md:space-y-0 space-y-1 p-2 border-b">
    JOBCARD
</h2>	 
  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Job No</p>
          <p>5001</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">ServiceType</p>
          <p>Laptop</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Customer Name</p>
          <p>Gopi</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Address</p>
          <p>No.3 Muthuvelar cross street</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Area</p>
          <p>Irumbaliyur</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Contact Number</p>
          <p>50046774</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Whatsapp Number</p>
          <p>56757001</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Email-Id</p>
          <p>kumar420@gmail.com</p>
        </div>
        <div>
            <h2 className="text-2xl text-center font-bold">CONFIGURATION & DETAILS </h2>
            <textarea
                name="message"
                rows={3}
                cols=""
                placeholder="Eg:Core i5 2nd / 8GB / 500GB Hard Disk)Model No.: Dell Latitude E6520"
                className="w-full text-sm  border border-gray-600 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-700"
                defaultValue={""}
                />
                
        </div>
        <div>
            <h2 className="text-2xl text-center font-bold">PROBLEM REPORTED & STATUS </h2>
            <textarea
                name="message"
                rows={5}
                cols=""
                placeholder="Eg:Board Dead, No Display"
                className="w-full text-sm  border border-gray-600 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-700"
                defaultValue={""}/>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">S.No Details</p>
          <p>-</p>
        </div>
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <p className="text-gray-600">Rough Estimate</p>
          <p>-</p>
        </div>
        <div>
            <h2 className=" text-2xl text-center font-bold"> TERMS & CONDITIONS </h2>
            <h3>
               1.  The Above materials will be delivered only against the submission of this job card
            </h3>
            <h3>
               2.   All the materials must be collected within 28 days from the job date
            </h3>
            <h3>
               3 .  Job Card is Not valid after 30 days from the Job Date
            </h3>
            <h3>
               4.   Depends upon the Spares Availability and Due to Critical Issues time may varry
            </h3>
            <h3>
            5.   Any illegal software will be liablity to customer only
            </h3>
            <h3>
            6.   If, Multisolutions and Systems does not received your payment within 30 days after invoice 								
            date we recognize that you have agreed to forfeit your product in lieu of payment and we will reserve the right to recycle your Device / Unit / Material
            </h3>
            <h3>
            7.   I Deepak ,authorize Multisolutions & Systems to throw out /				
                     destroy / recycle my  Device / Unit / Material if am Not Collecting within 6 Months from the 								
                    Date of JOB CARD (Either Repaired or Not-repaired).   
            </h3>
            <h3>
            8.  Subject to the Chennai Jurisdiction
            </h3>
          </div>
        </div>
        </div>
        </div>
</>
    )

}
export default JobCard