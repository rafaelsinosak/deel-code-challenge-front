import React, { useState, useEffect } from 'react';
import api from '../api';

const UnpaidJobs = () => {
  const [unpaidJobs, setUnpaidJobs] = useState([]);

  useEffect(() => {
    const fetchUnpaidJobs = async () => {
      try {
        const response = await api.get('/jobs/unpaid');
        setUnpaidJobs(response.data);
      } catch (error) {
        console.error('Error fetching unpaid jobs: ', error);
      }
    };

    fetchUnpaidJobs();
  }, []);

  return (
    <div>
      <h1>Unpaid Jobs</h1>
      <ul>
        {unpaidJobs.map((job) => (
          <li key={job.id}>{job.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnpaidJobs;