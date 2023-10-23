import React, { useState } from 'react';
import api from '../api';

const BestProfession = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get(`/admin/best-profession`, {
        params: {
            start,
            end
      }});
      console.log(start)
      setData(response.data);
    } catch (error) {
      console.error('Error fetching best profession data: ', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h2>Best Profession</h2>
      <form onSubmit={handleSubmit}>
        <label>Start Date: </label>
        <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        <br />
        <label>End Date: </label>
        <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        <br />
        <button type="submit">Fetch Data</button>
      </form>
      {data && (
        <div>
          <h3>Profession: {data.profession}</h3>
          <p>Total Earnings: {data.total_earnings}</p>
        </div>
      )}
    </div>
  );
};

export default BestProfession;
