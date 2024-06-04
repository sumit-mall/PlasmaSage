import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/donationRoutes/donation');
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="admin-container">
      <h1>Donation Appointments</h1>
      <table className="donations-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Birthday</th>
            <th>Appointment Date & Time</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation._id}>
              <td>{donation.name}</td>
              <td>{donation.age}</td>
              <td>{new Date(donation.birthday).toLocaleDateString()}</td>
              <td>{new Date(donation.appointmentDateTime).toLocaleString()}</td>
              <td>{donation.bloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
