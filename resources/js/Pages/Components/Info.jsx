import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white absolute px-16 w-full -z-10 bottom-0">
    
  <div className=" py-8 ">
    <div className="flex flex-col items-center text-center">
    <i class='bx bx-current-location text-lg  text-indigo-600/95' ></i>
      <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
      1, Gangai St, Balaji Nagar, East Tambaram, Irumbuliyur, Chennai, Tamil Nadu 600059
      </p>
      
    </div>
    <hr className="my-10   border-gray-200 " />
    <div className="flex items-center sm:flex-row sm:justify-between">
      <p className="text-sm text-gray-500">
        © Copyright 2024. All Rights Reserved.
      </p>
      <div className="flex mt-3 -mx-2 sm:mt-0">
        <a
          href="#"
          className="mx-2 hover:text-indigo-600/95  text-sm text-gray-500 transition-colors duration-300 "
          aria-label="Reddit"
        >
          {" "}
          Teams{" "}
        </a>
        <a
          href="#"
          className="mx-2 hover:text-indigo-600/95 text-sm text-gray-500 transition-colors duration-300 "
          aria-label="Reddit"
        >
          {" "}
          Privacy{" "}
        </a>
      </div>
    </div>
  </div>
</footer>

    )
}


const Info = () => {
  return (
<>
  


  <section className="py-24 flex items-center  justify-center bg-white">
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center">
        <p className="text-lg font-medium leading-8 text-indigo-600/95">
          Job Management System
        </p>
        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
         Multi Solution & Systems
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
        Laptop Repair & Services offer a wide range of repair and upgrade services together with first-rate client care. They have a team of knowledgeable hardware engineers and technicians who can repair and upgrade laptops and desktops. The technicians can identify the issue and suggest solutions based on the severity of the issue.
        </p>
      </div>
      
    </div>
    
  </section>
  <div className='flex  Justify-center'>
     <Footer />
  </div>
</>


  )
}

export default Info