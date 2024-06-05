import React, { useEffect, useRef, useState } from 'react'


const ServiceType = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className=" w-full inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex  justify-between items-center w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onClick={toggleDropdown}
        >
          <span>{name}</span>
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute w-full right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};








const EntryForm= () => {
  return (
    <>

  <div className="max-w-2xl mx-auto bg-white p-16">
    <form>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"

          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"

          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phnumber"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"

          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="wanumber"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1234567890"

          />
        </div>

      </div>
      <div className='mb-6'>
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="abc@gmail.com"

          />
        </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Street address
        </label>
        <input
          type="text"
          id="streetadd"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="address"

        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Address Line 2
        </label>
        <input
          type="text"
          id="addline2"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="address"

        />
      </div>
      <div className='grid gap-6 mb-6 lg:grid-cols-2'>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          City
        </label>
        <input
          type="email"
          id="email"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="chennai"

        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          State / Province / Region
        </label>
        <input
          type="text"
          id="state"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="tamilnadu"

        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Postal Zip Code
        </label>
        <input
          type="number"
          id="zipcode"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="eg:600045"

        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="india"

        />
      </div>

      </div>
      <div className='mb-6'>
      <ServiceType name={"Service Type"} options={["It"]}/>
      </div>
                 <div>
                 <label className='mb-2 block'>Configuration and Accessories</label>
            <textarea
                name="message"
                rows={5}
                cols=""
                placeholder="Eg:Core i5 2nd / 8GB / 500GB Hard Disk)Model No.: Dell Latitude E6520"
                className="w-full text-sm  border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-700"
                defaultValue={""}
                />
                 </div>
      <div>
        <div>
            <label className='mb-2 block'>Problem Report and Status</label>
            <textarea
                name="message"
                rows={5}
                cols=""
                placeholder="Eg:Board Dead, No Display"
                className="w-full text-sm border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-700"
       
                placeholderStyle={{ fontSize: '10px' }}
                />

        </div>
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
        Product S.No:
        </label>
        <input
          type="Text"
          id="email"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Eg:CNV720NQX"
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            defaultValue=""
            className="w-4 text-sm h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"

          />
        </div>

        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>

      <button
        
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <a href='/home'>Click here</a>

    </form>

  </div>
</>

  )
}

export default EntryForm
