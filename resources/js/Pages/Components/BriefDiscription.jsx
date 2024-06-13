import React, { useState } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';

const BriefDescription = ({ job, customer }) => {
  const [jobInfo, setJobInfo] = useState(job);
  const [customerInfo, setCustomerInfo] = useState(customer);
  const [editingField, setEditingField] = useState(null);

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

  const handleUpdateClick = async () => {
    if (!editingField) return;

    const fieldValue = jobInfo.hasOwnProperty(editingField)
      ? jobInfo[editingField]
      : customerInfo[editingField];

    try {
      const response = await axios.post('updatejobs', {
        key: editingField,
        value: fieldValue,
        id:jobInfo.cus_id
      });
      if (response.status === 200) {
        toast.success('Field updated successfully!');
      }
      setEditingField(null);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update field.');
    }
  };

  const renderField = (section, field, value) => {
    const isEditing = editingField === field;
    return (
      <div key={field} className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
        <p className="text-gray-600 capitalize">{field.replace('_', ' ')}</p>
        <div className="flex items-center">
          {isEditing ? (
            <input
              type="text"
              name={field} 
              value={value}
              onChange={(e) => handleInputChange(e, section, field)}
              className="border p-2 rounded flex-grow"
            />
          ) : (
            <span className="flex-grow">{value}</span>
          )}
          <button
            className={`ml-2 ${isEditing ? 'text-green-600' : 'text-blue-600'}`}
            onClick={() => (isEditing ? handleUpdateClick() : handleEditClick(field))}
          >
            {isEditing ? 'Update' : <i className="bx bxs-edit"></i>}
          </button>
        </div>
      </div>
    );
  };

  const NormalField = ( field , value) => {

    return (
      <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
        <p className="text-gray-600 capitalize">{field.replace('_', ' ')}</p>
        <div className="flex items-center">
          
            <span className="flex-grow">{value}</span>

        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl bg-white w-full rounded-lg shadow-xl">
        <div className="p-4 border-b flex justify-between">
          <div>
            <h2 className="text-2xl">Job Information</h2>
            <p className="text-sm text-gray-500">Personal details and application.</p>
          </div>
          <div className="text-2xl text-gray-500">Job Status: Finished</div>
        </div>

        <div>
          {NormalField('Customer_ID' , customerInfo.cus_id)}
          {NormalField('Name' , customerInfo.name)}
          {renderField('job', 'gdate', jobInfo.gdate)}
          {renderField('customer', 'pnumber', customerInfo.pnumber)}
          {renderField('customer', 'wnumber', customerInfo.wnumber)}
          {renderField('customer', 'email', customerInfo.email)}
          {renderField('customer', 'address', customerInfo.address)}
          {renderField('job', 'type', jobInfo.type)}
          {renderField('job', 'accon', jobInfo.accon)}
          {renderField('job', 'psno', jobInfo.psno || '-')}
          {renderField('job', 'prc', jobInfo.prc)}
          {renderField('job', 'action_taken_provider', jobInfo.action_taken_provider)}
          {renderField('job', 'action_taken_customer', jobInfo.action_taken_customer)}
          {renderField('job', 'return_condition', 'Returned / Good')}
          {renderField('job', 'deliver_date', '23.10.13')}
          {renderField('job', 'rough_estimate', '-')}
          {renderField('job', 'amount_breakup', '600')}
          {renderField('job', 'final_amount', '-')}
          {renderField('job', 'cash_mode', '-')}
          
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Cash Field</p>
            <div className="flex items-center space-x-4">
              {['Yes', 'No', 'Partial'].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="cashMode"
                    value={option}
                    checked={jobInfo.cash_field === option}
                    className="form-radio"
                    onChange={(e) => handleInputChange(e, 'job', 'cash_field')}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {renderField('job', 'remarks', 'Done at SASI COMP')}
          
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
                <a href="#" className="text-indigo-600 hover:underline">Download</a>
              </div>
              <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                <div className="space-x-2 truncate">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current inline text-gray-500" width={24} height={24} viewBox="0 0 24 24">
                    <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                  </svg>
                  <span>Delivery.pdf</span>
                </div>
                <a href="#" className="text-indigo-600 hover:underline">Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefDescription;
