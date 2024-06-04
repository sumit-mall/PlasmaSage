import React, { useState } from 'react';
import './DonationForm.css'; 

const DonationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [appointmentDateTime, setAppointmentDateTime] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (selectedDate.getTime() < tomorrow.getTime()) {
      selectedDate.setDate(tomorrow.getDate());
      setAppointmentDateTime(selectedDate.toISOString().slice(0, 16));
    } else {
      setAppointmentDateTime(selectedDate.toISOString().slice(0, 16));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      age: parseInt(age),
      birthday: new Date(birthday),
      appointmentDateTime: new Date(appointmentDateTime),
      bloodGroup,
    };

    try {
      const response = await fetch('http://localhost:8000/api/donationRoutes/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Donation appointment scheduled successfully');
        setIsScheduled(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to schedule donation:', errorData.message);
      }
    } catch (error) {
      console.error('Error scheduling donation:', error);
    }
  };

  return (
    <div className="donation-form-container">
      <h1>Donation Appointment Form</h1>
      {!isScheduled ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required /><br />

          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} /><br />

          <label htmlFor="appointmentDateTime">Appointment Date and Time:</label>
          <input type="datetime-local" id="appointmentDateTime" min={new Date().toISOString().slice(0, 16)} max={`${new Date().getFullYear() + 1}-12-31T18:00`} value={appointmentDateTime} onChange={handleDateChange} required /><br />

          <label htmlFor="bloodGroup">Blood Group:</label>
          <input type="text" id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} /><br />

          <button type="submit">Schedule Appointment</button>
        </form>
      ) : (
        <div className="confirmation-message">
          <p>Thank you, {name}! Your appointment has been scheduled for {appointmentDateTime}.</p>
        </div>
      )}
    </div>
  );
};

export default DonationForm;
