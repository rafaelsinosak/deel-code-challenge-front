import React, { useState } from 'react';
import api from '../api';;

const BestClients = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [limit, setLimit] = useState(2); // Default limit
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get('/admin/best-clients', {
        params: {
          start,
          end,
          limit,
        }
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        </label>
        <br />
        <label>
          Limit (Number of Clients):
          <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
        </label>
        <br />
        <button type="submit">Get Best Clients</button>
      </form>
      {result.length > 0 ? (
        <div>
          <h2>Best Clients:</h2>
          <ul>
            {result.map((client, index) => (
              <li key={index}>
                <p>ID: {client.id}</p>
                <p>Name: {`${client.firstName} ${client.lastName}`}</p>
                <p>Total Paid: {client.total_paid}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No data found for the given time range.</p>
      )}
    </div>
  );
};

export default BestClients;
