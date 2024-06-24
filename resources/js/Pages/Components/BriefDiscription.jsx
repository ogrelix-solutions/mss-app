
import React, { useRef, useState } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import { toWords } from 'number-to-words';
import LoadingBar from 'react-top-loading-bar';

const BriefDescription = ({ job, customer }) => {
  const [jobInfo, setJobInfo] = useState(job);
  const [customerInfo, setCustomerInfo] = useState(customer);
  const [editingField, setEditingField] = useState(null);
  const loadingBarRef = useRef(null);


  const fieldMap = {
    'Given Date': 'gdate',
    'Phone': 'pnumber',
    'Whatsapp': 'wnumber',
    'Service Type': 'type',
    'Configuration and Accessories': 'accon',
    'S.No Details': 'psno',
    'Problem Reported and Status': 'prc',
    'Action Taken': 'action_taken',
    'Return Condition': 'return_condition',
    'Delivery Date': 'ddate',
    'Rough Estimate': 'rough_estimate',
    'Amount Breakup': 'amount_breakup',
    'Final Amount': 'final_amount',
    'Cash Mode': 'cash_mode',
    'Remarks': 'remarks',
    'Cash Field': 'cash_field',
    'Job Status':'status'
  };


  const handleInputChange = (e, section, field) => {
    const value = e.target.value;
    if (section === 'job') {
      setJobInfo({ ...jobInfo, [field]: value });
    } else {
      setCustomerInfo({ ...customerInfo, [field]: value });
    }
  };

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleCancelClick = () => {
    setEditingField(null);
  };

  const handleUpdateClick = async () => {
    if (!editingField) return;
    loadingBarRef.current.continuousStart();

    const fieldKey = fieldMap[editingField] || editingField;
    const fieldValue = jobInfo.hasOwnProperty(fieldKey)
      ? jobInfo[fieldKey]
      : customerInfo[fieldKey];

    try {
      const response = await axios.post('updatejobs', {
        key: fieldKey,
        value: fieldValue,
        id: jobInfo.cus_id,
      });
      if (response.status === 200) {
        null
      }
      setEditingField(null);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update field.');
    } finally{
      loadingBarRef.current.complete();
    }
  };


  
    const renderField = (section, label, field, value, alphanumeric) => {
      const isEditing = editingField === label;
      const options = ['Upi', 'Cash on Delivery', 'Net Banking' , 'Free'];
      const cash = ['Paid','Partial','Unpaid']
      const job = ["Finished" , "Pending" ,"Partial"]
  
      return (
        <div key={field} className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
          <LoadingBar color="#f11946" ref={loadingBarRef} />
          <p className="text-gray-600 capitalize">{label}</p>
          <div className="flex items-center">
            {isEditing && (field === 'ddate' || field === 'gdate')? (
              <input
                type="date"
                name={field}
                value={value}
                onChange={(e) => handleInputChange(e, section, field)}
                className="border p-2 rounded flex-grow"
              />
            ) : isEditing && field === 'cash_mode'? (
              <div>
                {options.map((option) => (
                  <label key={option} className="flex items-center mr-4">
                    <input
                      type="radio"
                      name={field}
                      value={option}
                      checked={value === option}
                      onChange={(e) => handleInputChange(e, section, field)}
                      className="form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            ) : isEditing && field === 'cash_field'? (
              <div>
                {cash.map((option) => (
                  <label key={option} className="flex items-center mr-4">
                    <input
                      type="radio"
                      name={field}
                      value={option}
                      checked={value === option}
                      onChange={(e) => handleInputChange(e, section, field)}
                      className="form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            ): isEditing && field === 'status'? (
              <div>
                {job.map((option) => (
                  <label key={option} className="flex items-center mr-4">
                    <input
                      type="radio"
                      name={field}
                      value={option}
                      checked={value === option}
                      onChange={(e) => handleInputChange(e, section, field)}
                      className="form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            )
            
            : isEditing? (
              <input
                type="text"
                name={field}
                value={value}
                onChange={(e) => handleInputChange(e, section, field)}
                className="border p-2 rounded flex-grow"
              />
            ) : (
              field === 'ddate' || field === 'gdate'? (
                <span className="flex-grow">{value}</span>
              ) : alphanumeric? (
                <span className="flex-grow">
                  Rs. <span className='text-sm'>{value}</span>
                </span>
              ) : (
                <span className="flex-grow">{value}</span>
              )
            )}
            <button
              className={`ml-2 ${isEditing? 'text-green-600' : 'text-blue-600'}`}
              onClick={() => (isEditing? handleUpdateClick() : handleEditClick(label))}
            >
              {isEditing? 'Save' : <i className="bx bxs-edit"></i>}
            </button>
            {isEditing && (
              <button
                className="ml-2 text-red-600"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      );
    };
  


  const NormalField = (label, value) => (
    <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
      <p className="text-gray-600 capitalize">{label}</p>
      <div className="flex items-center">
        <span className="flex-grow">{value}</span>
      </div>
    </div>
  );
  const handleDownload = () => {
    if (!jobInfo || !customerInfo) {
      console.error('Job information or customer information is missing.');
      return;
    }

   
    axios.post('download-jobcard', { id: jobInfo.cus_id }, {
        responseType: 'blob',
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${customerInfo.cus_id}_${jobInfo.id}_jobcard.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    }).catch(error => {
        console.error('Error downloading PDF:', error);
    });
  };

  const handleDownloadDelivery = () => {
    if (!jobInfo || !customerInfo) {
      console.error('Job information or customer information is missing.');
      return;
    }

    if(!jobInfo.action_taken){
      toast.error("Action Taken is Required to Generate Delivery Recipt")
    }
    if(!jobInfo.cash_mode){
      toast.error("Cash Mode is Required to Generate Delivery Recipt")
    }
    if(!jobInfo.return_condition){
      toast.error("Return Condition is Required to Generate Delivery Recipt")
    }

    if(jobInfo.action_taken && jobInfo.cash_mode && jobInfo.return_condition){
    axios.post('download-delivery', { id: jobInfo.cus_id }, {
        responseType: 'blob',
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${jobInfo.cus_id}_${jobInfo.id}_delivery.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    }).catch(error => {
        console.error('Error downloading PDF:', error);
    });
  };
}

  

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <ToastContainer />
      <div className="max-w-4xl bg-white w-full rounded-lg shadow-xl">
        <div className="p-4 border-b flex justify-between">
          <div>
            <h2 className="text-2xl">Job Information</h2>
            <p className="text-sm text-gray-500">Personal details and application.</p>
          </div>
          <div className="text-2xl text-gray-500">Job Status: {jobInfo.status}</div>
        </div>

        <div>
          {NormalField('Customer ID', customerInfo.cus_id)}
          {NormalField('Name', customerInfo.name)}
          {renderField('job', 'Given Date', 'gdate', jobInfo.gdate)}
          {renderField('job', 'Approximate Date', 'adate', jobInfo.adate)}
          {NormalField('Phone', customerInfo.pnumber)}
          {NormalField('Whatsapp', customerInfo.wnumber)}
          {NormalField('Email', customerInfo.email)}
          {NormalField('Address', customerInfo.address)}
          {renderField('job', 'Service Type', 'type', jobInfo.type)}
          {renderField('job', 'Configuration and Accessories', 'accon', jobInfo.accon)}
          {renderField('job', 'S.No Details', 'psno', jobInfo.psno)}
          {renderField('job', 'Problem Reported and Status', 'prc', jobInfo.prc)}

          {renderField('job', 'Action Taken', 'action_taken', jobInfo.action_taken)}
          {renderField('job', 'Return Condition', 'return_condition', jobInfo.return_condition)}
          {renderField('job', 'Delivery Date', 'ddate', jobInfo.ddate)}

          {renderField('job', 'Rough Estimate', 'rough_estimate', jobInfo.rough_estimate, true)}
          {renderField('job', 'Amount Breakup', 'amount_breakup', jobInfo.amount_breakup)}
          {renderField('job', 'Final Amount', 'final_amount', jobInfo.final_amount, true)}
          {renderField('job', 'Cash Mode', 'cash_mode', jobInfo.cash_mode)}
          {renderField('job', 'Cash Field', 'cash_field', jobInfo.cash_field)}

            
          </div>

          {renderField('job', 'Remarks', 'remarks', jobInfo.remarks)}

          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
            <p className="text-gray-600">Attachments</p>
            <div className="space-y-2">
              <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                <div className="space-x-2 truncate">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current inline text-gray-500" width={24} height={24} viewBox="0 0 24 24">
                    <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                  </svg>
                  <span>JobCard.pdf</span>
                </div>
                <a onClick={(e)=>handleDownload()} className="text-indigo-600 hover:underline">Download</a>
              </div>
              <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                <div className="space-x-2 truncate">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current inline text-gray-500" width={24} height={24} viewBox="0 0 24 24">
                    <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                  </svg>
                  <span>Delivery.pdf</span>
                </div>
                <a onClick={(e)=>handleDownloadDelivery()} className="text-indigo-600 hover:underline">Download</a>
              </div>
            </div>
          </div>
          {renderField('job', 'Job Status', 'status', jobInfo.status)}

        
        
      </div>
    </div>
  );
};

export default BriefDescription;
