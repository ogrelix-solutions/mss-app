import React, { useEffect, useState } from 'react'

import axios from '../api/axios'





const EntryForm= () => {

  const[name , setname] = useState("")
  const[firstname , setfirstname] = useState("")
  const[lastname , setlastname] = useState("")
  const[phnnumber , setphnnumber] = useState("")
  const[whatsapp , setwhatsapp]  = useState("")
  const[email , setemail] = useState("")
  const[address,setaddress] = useState("")
  const ServiceType = ["It service"]
  const[stype,setstype] = useState("")
  const[streetAdress , setstreetAdress] = useState("")
  const[Adressline2 , setaAdressline2]  = useState("")
  const[city , setcity] = useState("")
  const[state,setstate] = useState("TamilNadu")
  const[postalcode , setpostalcode] = useState("600059")
  const[country,setCountry] = useState("India")
  const[productreport, setproductreport] = useState("")
  const[configuration, setconfiguration] = useState("")
  const[serialno, setserialno] = useState("")

  useEffect(() => {
    setwhatsapp(phnnumber);
  }, [phnnumber]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setname(firstname + " " + lastname)
    setaddress(streetAdress+","+Adressline2+","+city+","+state+","+postalcode+","+country)
    const formData = {
      name,
      phnnumber,
      whatsapp,
      email,
      address,
      productreport,
      configuration,
      serialno,
    };

    try {
      const response = await axios.post('jobentry', formData);

      if (response.status === 200) {
        console.log('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



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
      
        
  
        
        

        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            First name
          </label>
          <input
            value={firstname}
            onChange={(e)=>setfirstname(e.target.value)}
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
          value={lastname}
          onChange={(e)=>setlastname(e.target.value)}
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
          value={phnnumber}
          onChange={(e)=>setphnnumber(e.target.value)}
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
          value={whatsapp}
          onChange={(e)=>setwhatsapp(e.target.value)}
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
          value={email}
          onChange={(e)=>setemail(e.target.value)}
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
        value={streetAdress}
        onChange={(e)=>setstreetAdress(e.target.value)}
          type="address"
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
        value={Adressline2}
        onChange={(e)=>setaAdressline2(e.target.value)}
          type="address"
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
          value={city}
          onChange={(e)=>setcity(e.target.value)}
          type="address"
          id="city"
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
        value={state}
        onChange={(e)=>setstate(e.target.value)}
          type="address"
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
        value={postalcode}
        onChange={(e)=>setpostalcode(e.target.value)}
          type="number"
          id="zipcode"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="eg:600045"

        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Country
        </label>
        <input
        value={country}
        onChange={(e)=>setcountry(e.target.value)}
          type="text"
          id="country"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="eg:India"

        />
      </div>
      
      
  


      </div>
      <div className='mb-6'>
      <select
            value={stype}
            onChange={(e)=>setstype(e.target.value)}
            id="country"
            className="border border-gray-300 mt-6 h-[50%] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          > 
            <option  disabled selected>Service Types</option>
            {ServiceType.map((option, index) => (
              <option  key={index} value={option.value}>
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

      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      

    </form>

  </div>
</>

  )
}

export default EntryForm
