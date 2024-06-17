import React, { useState } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import { toWords } from 'number-to-words';

const BriefCustomer = ({ customer }) => {
  const [customerInfo, setCustomerInfo] = useState(customer);
  const [editingField, setEditingField] = useState(null);

  const fieldMap = {
    'Phone': 'pnumber',
    'Whatsapp': 'wnumber',
    'Email': 'email',
    'Address': 'address',
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setCustomerInfo({ ...customerInfo, [field]: value });
  };

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleCancelClick = () => {
    setEditingField(null);
  };

  const handleUpdateClick = async () => {
    if (!editingField) return;

    const fieldKey = fieldMap[editingField];
    const fieldValue = customerInfo[fieldKey];

    try {
      const response = await axios.post('updatecustomer', {
        key: fieldKey,
        value: fieldValue,
        id: customer.cus_id,
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

  const renderField = (label, field, value) => {
    const isEditing = editingField === label;

    return (
      <div key={field} className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
        <p className="text-gray-600 capitalize">{label}</p>
        <div className="flex items-center">
          {isEditing ? (
            <input
              type="text"
              name={field}
              value={value}
              onChange={(e) => handleInputChange(e, field)}
              className="border p-2 rounded flex-grow"
            />
          ) : (
            <span className="flex-grow">{value}</span>
          )}
          <button
            className={`ml-2 ${isEditing ? 'text-green-600' : 'text-blue-600'}`}
            onClick={() => (isEditing ? handleUpdateClick() : handleEditClick(label))}
          >
            {isEditing ? 'Save' : <i className="bx bxs-edit"></i>}
          </button>
          {isEditing && (
            <button className="ml-2 text-red-600" onClick={handleCancelClick}>
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

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl bg-white w-full rounded-lg shadow-xl">
        <div className="p-4 border-b flex justify-between">
          <div>
            <h2 className="text-2xl">Customer Information</h2>
            <p className="text-sm text-gray-500">Personal details and application.</p>
          </div>
        </div>

        <div>
          {NormalField('Customer ID', customerInfo.cus_id)}
          {NormalField('Name', customerInfo.name)}
          {renderField('Phone', 'pnumber', customerInfo.pnumber)}
          {renderField('Whatsapp', 'wnumber', customerInfo.wnumber)}
          {renderField('Email', 'email', customerInfo.email)}
          {renderField('Address', 'address', customerInfo.address)}
        </div>
      </div>
    </div>
  );
};

export default BriefCustomer;
