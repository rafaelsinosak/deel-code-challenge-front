import React, { useState } from 'react';
import api from '../api';

const ContractById = () => {
  const [contractId, setContractId] = useState('');
  const [contractData, setContractData] = useState(null);


  const handleInputChange = (e) => {
    setContractId(e.target.value);
  };

  const handleGetContract = async () => {
    try {
        const response = await api.get(`/contracts/${contractId}`)
        setContractData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
       <input type="text" value={contractId} onChange={handleInputChange} placeholder="Enter Contract ID" />
      <button onClick={handleGetContract}>Get Contract</button>
      {contractData  ? (
        <div>
          <h2>Contract Details:</h2>
          <p>ID: {contractData.id}</p>
          <p>Terms: {contractData.terms}</p>
          <p>Status: {contractData.status}</p>
          <p>Client ID: {contractData.ClientId}</p>
          <p>Contractor ID: {contractData.ContractorId}</p>
        </div>
      ) : (
        <p>No contract found with the provided ID.</p>
      )}
    </div>
  );
};

export default ContractById;
