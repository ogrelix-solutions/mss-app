import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';

const EntryForm = () => {
  const loadingBarRef = useRef(null);
  const [customerData, setCustomerData] = useState([]);
  const [phnnumber, setPhnnumber] = useState("");
  const [cusid, setCusId] = useState("");
  const [name, setName] = useState("");
  const [productreport, setProductReport] = useState("");
  const [configuration, setConfiguration] = useState("");
  const [serialno, setSerialNo] = useState("");
  const [adate, setApproxDate] = useState("");
  const [gdate, setGivenDate] = useState("");
  const [stype, setSType] = useState("");
  const [acceptance , setacceptance] = useState(false)
  const ServiceType = ["Laptop", "Desktop Computer", "Motherboard", "Mobile", "Monitor", "Memory Card", "External Hard Disk", "Printer", "All in One Inkjet Printer", "Speaker", "Switch", "DVR", "Pendrive", "NVR", "CAMERA CCTV", "WEB CAMERA", "CCTV SMPS", "Normal SMPS"];
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getCustomerDetails();
  }, []);

  const getCustomerDetails = async () => {
    try {
      const response = await axios.post('customerget');
      if (response.status === 200) {
        setCustomerData(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleCustomerIdChange = (e) => {
    let inputCusId = e.target.value;
    if (!inputCusId.startsWith('cs-')) {
      inputCusId = `cs-${inputCusId.replace('cs', '')}`;
    }
    setCusId(inputCusId);
    const customer = customerData.find(c => c.cus_id === inputCusId);
    if (customer) {
      setPhnnumber(customer.pnumber);
      setName(customer.name);
    } else {
      setPhnnumber("");
      setName("");
    }
  }

  const handlePhoneNumberChange = (e) => {
    const inputPhnNumber = e.target.value;
    setPhnnumber(inputPhnNumber);
    const customer = customerData.find(c => c.pnumber.toString() === inputPhnNumber);
    if (customer) {
      setCusId(customer.cus_id);
      setName(customer.name);
    } else {
      setCusId("");
      setName("");
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    loadingBarRef.current.continuousStart();
    const formData = {
      cusid: cusid,
      stype,
      productreport,
      configuration,
      serialno,
      adate,
      gdate
    };

    if (acceptance && stype && productreport && configuration) {
      try {
        const response = await axios.post('jobentry', formData);
        if (response.status === 201) {
          toast.success("Form submitted successfully")
        }
      } catch (error) {
        console.error('Error:', error);
      } finally{
        loadingBarRef.current.complete();
      }
    } else {
      if (!stype) {
        toast.error("Select Service type")
      }
      if (!configuration) {
        toast.error("Enter Configuration and Accessories")
      }
      if (!productreport) {
        toast.error("Enter Problem Statement")
      }
      if (!acceptance) {
        toast.error("Accept the Terms and Conditions")
      }
    
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-16">
    <LoadingBar color="#f11946" ref={loadingBarRef} />
    <ToastContainer autoClose={2000}/>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="customer_id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Customer ID
            </label>
            <input
              type="text"
              id="customer_id"
              value={cusid}
              onChange={handleCustomerIdChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="CS1010"
            />
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone_number"
              value={phnnumber}
              onChange={handlePhoneNumberChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1234567890"
            />
          </div>
          <label className="block w-full text-gray-700 text-sm font-bold mb-2">Name: {name}</label>
        </div>
        <hr className='m-5' />
        <div className="date-select mb-6">
          <p className='text-xl text-center mb-4'>Job Entry</p>
          <label className="block w-full text-gray-700 text-sm font-bold mb-2">Given Date</label>
          <input
            type="date"
            value={gdate}
            onChange={(e) => setGivenDate(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>
        <div className="date-select mb-6">
          <label className="block w-full text-gray-700 text-sm font-bold mb-2">Approximate Due Date</label>
          <input
            type="date"
            value={adate}
            onChange={(e) => setApproxDate(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>
        <div className='mb-6 mt-4'>
          <label htmlFor="stype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
            Service Types
          </label>
          <select
            value={stype}
            onChange={(e) => setSType(e.target.value)}
            id="stype"
            className="border border-gray-300 h-[50%] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>Select a Service Type</option>
            {ServiceType.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='mb-2 block'>Configuration and Accessories</label>
          <textarea
            value={configuration}
            onChange={(e) => setConfiguration(e.target.value)}
            name="message"
            rows={5}
            placeholder="Eg:Core i5 2nd / 8GB / 500GB Hard Disk)Model No.: Dell Latitude E6520"
            className="w-full text-sm border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-700"
          />
        </div>
        <div>
          <label className='mb-2 block'>Problem Report and Status</label>
          <textarea
            value={productreport}
            onChange={(e) => setProductReport(e.target.value)}
            name="message"
            rows={5}
            placeholder="Eg:Board Dead, No Display"
            className="w-full text-sm border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-700"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Product S.No:
          </label>
          <input
            value={serialno}
            onChange={(e) => setSerialNo(e.target.value)}
            type="Text"
            id="serial_number"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Eg:CNV720NQX"
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              value={acceptance}
              onClick={(e)=>setacceptance(true)}
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-4 text-sm h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
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
        <div className='flex justify-end'>
          <button
            onClick={handleSubmit}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryForm;
