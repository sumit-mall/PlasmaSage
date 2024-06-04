import React, { useState } from 'react';
import './Request.css'; // Import CSS file for styling

const Request = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [reason, setReason] = useState('');
  const [selectedBloodTypes, setSelectedBloodTypes] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleBloodTypeClick = (bloodType) => {
    if (selectedBloodTypes.includes(bloodType)) {
      setSelectedBloodTypes(selectedBloodTypes.filter(type => type !== bloodType));
    } else {
      setSelectedBloodTypes([...selectedBloodTypes, bloodType]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      name,
      contact,
      timeFrame,
      reason,
      selectedBloodTypes,
    };

    try {
      const response = await fetch('http://localhost:8000/api/requestRoutes/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log('Request submitted successfully');
        // Reset the form fields after submission
        setName('');
        setContact('');
        setTimeFrame('');
        setReason('');
        setSelectedBloodTypes([]);
        setSubmitted(true);
      } else {
        console.error('Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className="blood-request-form-container">
      <div className="blood-request-form">
        <h2>Blood Request Form</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />

            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} required /><br />

            <div className="blood-types-selection">
              <p>Selected Blood Types:</p>
              {selectedBloodTypes.map(bloodType => (
                <button key={bloodType} type="button" className="selected-blood-type" onClick={() => handleBloodTypeClick(bloodType)}>{bloodType}</button>
              ))}
            </div>

            <div className="blood-types-selection">
              <p>Available Blood Types:</p>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
                <button key={bloodType} type="button" className={`available-blood-type ${selectedBloodTypes.includes(bloodType) ? 'selected' : ''}`} onClick={() => handleBloodTypeClick(bloodType)}>{bloodType}</button>
              ))}
            </div>

            <label htmlFor="timeFrame">Time Frame:</label>
            <select id="timeFrame" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)} required>
              <option value="">Select</option>
              <option value="Immediately">Immediately</option>
              <option value="Within a week">Within a week</option>
              <option value="Within a month">Within a month</option>
              <option value="Other">Other</option>
            </select><br />

            <label htmlFor="reason">Reason for Blood Types:</label>
            <textarea id="reason" value={reason} onChange={(e) => setReason(e.target.value)} required /><br />

            <button type="submit">Submit Request</button>
          </form>
        ) : (
          <div className="submission-message">
            <p>Thank you, {name}! Your request has been submitted. We will contact you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Request;
