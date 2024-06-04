import React, { useEffect, useState } from 'react';
import './Admin.css';

const RequestPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/requestRoutes/request');
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="admin-container">
      <h1>Requests</h1>
      <table className="donations-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Time Frame</th>
            <th>Reason</th>
            <th>Selected Blood Types</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.name}</td>
              <td>{request.contact}</td>
              <td>{request.timeFrame}</td>
              <td>{request.reason}</td>
              <td>{request.selectedBloodTypes.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestPage;
