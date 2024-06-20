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

const CustomerEntry = () => {

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
    if (!state) newErrors.state = "State is required";
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
      state,
    };


      try {
        const response = await axios.post('customerentry', formData);
        if (response.status === 201) {
          toast.success('Form submitted successfully!');

        }
      } catch (error) {
        console.error('Error:', error);
        toast.error("There is an error")
      }
    }
    
    

    



  return (
    <div className="max-w-2xl mx-auto bg-white p-16">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
      
        
        <div className="grid gap-6 mb-3 lg:grid-cols-2">
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
            maxLength={10}
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
            maxLength={10}          
            label="WhatsApp Number"
            value={whatsapp}
            onChange={(e) => setwhatsapp(e.target.value)}
            type="tel"
            id="wanumber"
            placeholder="123-45-678"
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
            label="State"
            value={state}
            onChange={(e) => setstate(e.target.value)}
            id="state"
            placeholder="tamilnadu"
            errorMessage={errors.state}
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

export default CustomerEntry;
