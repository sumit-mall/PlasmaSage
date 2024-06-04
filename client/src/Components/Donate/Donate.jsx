import React, { useState } from 'react';
import hero from '../../assets/hero-dark.png'
import './Donate.css'; 

const Donate = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [recentTattoo, setRecentTattoo] = useState('no');
  const [recentMedication, setRecentMedication] = useState('no');
  const [isEligible, setIsEligible] = useState(null);
  const [redirectToDonationForm, setRedirectToDonationForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check eligibility criteria
    if (age >= 18 && age <= 65 && gender !== '' && recentTattoo === 'no' && recentMedication === 'no') {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };


  if (redirectToDonationForm) {
    return <Redirect to="/donationform" />; // Redirect to donation form
  }

  return (
    
    <div className={`blood-donation-container ${isEligible ? 'success' : 'error'}`}>
      <h1>Blood Donation Eligibility Check</h1>
      {isEligible === null ? (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="input-field" value={name} onChange={(e) => setName(e.target.value)} required /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" className="input-field" value={age} onChange={(e) => setAge(e.target.value)} required /><br />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" className="input-field" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br />

        <label htmlFor="recentTattoo">Recent Tattoo:</label>
        <select id="recentTattoo" className="input-field" value={recentTattoo} onChange={(e) => setRecentTattoo(e.target.value)} required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />

        <label htmlFor="recentMedication">Recent Medication:</label>
        <select id="recentMedication" className="input-field" value={recentMedication} onChange={(e) => setRecentMedication(e.target.value)} required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select><br />

        <button type="submit">Check Eligibility</button>
      </form>
      )
      
      : isEligible ? (
        <div className="message success">
          <p>Congratulations, you are eligible to donate blood!</p>
          <a href="/donationform"><button>Donate Now</button></a>
        </div>
      ) : (
        <div className="message error">
          <p>Sorry, you are not eligible to donate blood.</p>
        </div>
      )}
      
    </div>
  );
};

export default Donate;
