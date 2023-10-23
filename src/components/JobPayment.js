import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams } from 'react-router-dom';

const JobPayment = () => {
  const [message, setMessage] = useState('');

  const { jobId } = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        
        const response = await api.post(`/jobs/${jobId}/pay`);
        console.log(response)
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching payments: ', error);
      }
    };
    fetchJobs();
  }, [jobId]);

  return (
    <div>
        <h1>Job Payment</h1>
      {message && <p>{message}</p>}
    </div>
  );
};

export default JobPayment;
