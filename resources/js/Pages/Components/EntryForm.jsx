import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';

const InputField = ({max, label, value, onChange, type = "text", id, placeholder, pattern, errorMessage }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
      {label}
    </label>
    <input
      maxLength={max}
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      pattern={pattern}
    />
    {errorMessage && (
      <div
        className="flex mt-1 items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">{label} Error:</span> {errorMessage}
        </div>
      </div>
    )}
  </div>
);

const EntryForm = () => {
  
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phnnumber, setphnnumber] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [email, setemail] = useState("");
  const [streetAdress, setstreetAdress] = useState("");
  const [Adressline2, setaAdressline2] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("TamilNadu");
  const [postalcode, setpostalcode] = useState("600059");
  const [country, setCountry] = useState("India");
  const [productreport, setproductreport] = useState("");
  const [configuration, setconfiguration] = useState("");
  const [serialno, setserialno] = useState("");
  const [stype, setstype] = useState("");
  const ServiceType = ["It service"]
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setwhatsapp(phnnumber);
  }, [phnnumber]);

  const validateForm = () => {
    const newErrors = {};
    if (!firstname) newErrors.firstname = "First name is required";
    if (!lastname) newErrors.lastname = "Last name is required";
    if (!phnnumber) newErrors.phnnumber = "Phone number is required";
    if (!email) newErrors.email = "Email is required";
    if (!streetAdress) newErrors.streetAdress = "Street address is required";
    if (!city) newErrors.city = "City is required";
    if (!postalcode) newErrors.postalcode = "Postal code is required";
    if (!country) newErrors.country = "Country is required";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const name = `${firstname} ${lastname}`;
    const address = `${streetAdress},${Adressline2},${city},${state},${postalcode},${country}`;
    const formData = {
      name,
      phnnumber,
      whatsapp,
      email,
      address,
      stype,
      productreport,
      configuration,
      serialno,
    };
    if(stype && productreport && configuration ){

      try {
        const response = await axios.post('jobentry', formData);
        if (response.status === 200) {
          toast.success('Form submitted successfully!');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    else{
      if(!stype){
        toast.error("Select Service type")
      }
      if(!configuration){
        toast.error("Enter Configuration and Accessories")
      }
      if(!productreport){
        toast.error("Enter Problem Statement")
      }
      
    }

    }
  
    

  return (
    <div className="max-w-2xl mx-auto bg-white p-16">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
      <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Customer_id
          </label>
          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="CS1010"

          />
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Customer_number
          </label>
          <input
            type="text"
            id="first_name"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1234567890"

          />
        </div>
        </div>
        <hr className='m-5'></hr>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <InputField
            label="First name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            id="first_name"
            placeholder="John"
            errorMessage={errors.firstname}
          />
          <InputField
            label="Last name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            id="last_name"
            placeholder="Doe"
            errorMessage={errors.lastname}
          />
          <InputField
            max={10}
            label="Phone number"
            value={phnnumber}
            onChange={(e) => setphnnumber(e.target.value)}
            type="tel"
            id="phnumber"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            errorMessage={errors.phnnumber}
          />
          <InputField
            label="WhatsApp Number"
            value={whatsapp}
            onChange={(e) => setwhatsapp(e.target.value)}
            type="tel"
            id="wanumber"
            placeholder="1234567890"
            errorMessage={errors.whatsapp}
          />
        </div>
        <div className="mb-6">
          <InputField
            label="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            errorMessage={errors.email}
          />
        </div>
        <div className="mb-6">
          <InputField
            label="Street address"
            value={streetAdress}
            onChange={(e) => setstreetAdress(e.target.value)}
            id="streetadd"
            placeholder="address"
            errorMessage={errors.streetAdress}
          />
        </div>
        <div className="mb-6">
          <InputField
            label="Address Line 2"
            value={Adressline2}
            onChange={(e) => setaAdressline2(e.target.value)}
            id="addline2"
            placeholder="address"
          />
        </div>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <InputField
            label="City"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            id="city"
            placeholder="chennai"
            errorMessage={errors.city}
          />
          <InputField
            label="State / Province / Region"
            value={state}
            onChange={(e) => setstate(e.target.value)}
            id="state"
            placeholder="tamilnadu"
          />
          <InputField
            label="Postal Zip Code"
            value={postalcode}
            onChange={(e) => setpostalcode(e.target.value)}
            type="number"
            id="zipcode"
            placeholder="eg:600045"
            errorMessage={errors.postalcode}
          />
          <InputField
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            id="country"
            placeholder="eg:India"
            errorMessage={errors.country}
          />
        </div>
        <div className='mb-6'>
        <label htmlFor="stype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
          Service Types
        </label>
        <select
          value={stype}
          onChange={(e) => setstype(e.target.value)}
          id="stype"
          className="border border-gray-300 mt-6 h-[50%] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        > 
          <option value="" disabled selected>Select a Service Type</option>
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
            onChange={(e)=>setconfiguration(e.target.value)}
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
            value={productreport}
            onChange={(e)=>setproductreport(e.target.value)}
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
        value={serialno}
        onChange={(e)=>setserialno(e.target.value)}
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
