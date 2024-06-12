import React, { useState } from 'react'
import EntryForm from './Components/EntryForm'
import JobsTable from './Components/JobsTable';
import Info from './Components/Info';
import BriefDiscription from './Components/BriefDiscription';
import 'react-toastify/dist/ReactToastify.css';


function Home() {


  const [CurrentComponent , SetCurrentComponent] = useState(0);


  function Return_Component() {
    if (CurrentComponent === 2) {
      return <EntryForm />;
    }
    if(CurrentComponent === 3){
      return <JobsTable />
    } 
    if(CurrentComponent === 1){
      return <Info/>
    }
    if(CurrentComponent === 4){
      return <BriefDiscription/>
    }
     else {
      return null; 
    }
  }


  return (
    <>
    <div className='flex'>
   
    <div className="fixed min-h-screen bg-gray-100">
  <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
    <div className="flex h-screen flex-col justify-between pt-2 pb-6">
      <div>
        <div className="w-max p-2.5">
          <img
            src="https://tailus.io/images/logo.svg"
            className="w-32"
            alt=""
          />
        </div>
        <ul className="mt-6 space-y-2 tracking-wide">
          <li className="min-w-max">
            <a
              onClick={(e)=>SetCurrentComponent(1)}
              aria-label="dashboard"
              className="relative hover:bg-gradient-to-r from-sky-600 hover:text-white to-cyan-400 flex items-center space-x-4 px-4 py-3 text-gray-600"
            >
              <i class='bx bxs-dashboard text-black text-2xl hover:text-blue-400'></i>
             
              <span className="-mr-1 font-medium">Info</span>
            </a>
          </li>
          <li className="min-w-max">
            <a
              onClick={(e)=>SetCurrentComponent(2)}
              aria-label="dashboard"
              className="relative hover:bg-gradient-to-r from-sky-600 hover:text-white to-cyan-400 flex items-center space-x-4 px-4 py-3 text-gray-600"
            >
              <i class='bx bxs-file text-black text-2xl hover:text-blue-400'></i>
             
              <span className="-mr-1 font-medium">Entry form</span>
            </a>
          </li>
          <li className="min-w-max">
            <a
              onClick={(e)=>SetCurrentComponent(3)}
              aria-label="dashboard"
              className="relative hover:bg-gradient-to-r from-sky-600 hover:text-white to-cyan-400 flex items-center space-x-4 px-4 py-3 text-gray-600"
            >
              <i class='bx bxs-briefcase text-black text-2xl hover:text-blue-400'></i>
             
              <span className="-mr-1 font-medium">Jobs</span>
            </a>
          </li>
          <li className="min-w-max">
            <a
              onClick={(e)=>SetCurrentComponent(4)}
              aria-label="dashboard"
              className="relative hover:bg-gradient-to-r from-sky-600 hover:text-white to-cyan-400 flex items-center space-x-4 px-4 py-3 text-gray-600"
            >
              <i class='bx bxs-report text-black text-2xl hover:text-blue-400'></i>
             
              <span className="-mr-1 font-medium">Reports</span>
            </a>
          </li>
          
          </ul>
         </div>
    </div>
  </div>
</div>

    
















    <section className='w-full ml-[3%]'>
    {Return_Component()}

    </section>
    </div>
    </>
  )
}

export default Home