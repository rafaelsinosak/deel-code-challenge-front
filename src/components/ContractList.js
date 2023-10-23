import React, { useState, useEffect } from 'react';
import api from '../api';

const ContractList = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await api.get('/contracts');
        setContracts(response.data);
      } catch (error) {
        console.error('Error fetching contracts: ', error);
      }
    };

    fetchContracts();
  }, []);

  return (
    <div>
      <h1>Contracts</h1>
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>{contract.terms}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContractList;