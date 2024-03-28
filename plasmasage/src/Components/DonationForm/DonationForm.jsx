
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
      // Set the date to tomorrow if selected date is earlier
      selectedDate.setDate(tomorrow.getDate());
      setAppointmentDateTime(selectedDate.toISOString().slice(0, 16));
    } else {
      setAppointmentDateTime(selectedDate.toISOString().slice(0, 16));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, let's just set isScheduled to true
    setIsScheduled(true);
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
