import React, { useState, useEffect } from 'react';
import './Bloodbank.css'; // Import CSS file for styling

const Bloodbank = () => {
  // State variables to store blood group data
  const [bloodGroups, setBloodGroups] = useState({
    'A+': 0,
    'A-': 0,
    'B+': 0,
    'B-': 0,
    'AB+': 0,
    'AB-': 0,
    'O+': 0,
    'O-': 0
  });

  useEffect(() => {
    // Fetch blood group data from API or use mock data
    // Here, mock data is used for demonstration purposes
    const mockBloodData = {
      'A+': 120,
      'A-': 90,
      'B+': 80,
      'B-': 70,
      'AB+': 50,
      'AB-': 40,
      'O+': 150,
      'O-': 100
    };
    setBloodGroups(mockBloodData);
  }, []);

  // Function to get the least 2-3 blood groups
  const getLeastBloodGroups = () => {
    const sortedBloodGroups = Object.keys(bloodGroups).sort((a, b) => bloodGroups[a] - bloodGroups[b]);
    return sortedBloodGroups.slice(0, 3);
  };

  // Dynamic banner based on blood quantity
  const getBannerClassName = (quantity) => {
    if (quantity < 50) {
      return 'low';
    } else if (quantity < 100) {
      return 'medium';
    } else {
      return 'high';
    }
  };

  // Render blood pouches for each blood group
  const renderBloodPouches = () => {
    return Object.entries(bloodGroups).map(([group, quantity]) => (
      <div key={group} className={`blood-pouch ${getBannerClassName(quantity)}`}>
        <span>{group}</span>
        <span>{quantity}</span>
      </div>
    ));
  };

  // Render least blood group donation message
  const renderDonationMessage = () => {
    const leastBloodGroups = getLeastBloodGroups();
    return (
      <p className = "donor-request">Blood donors of {leastBloodGroups.join(', ')} blood groups are requested to donate blood.</p>
    );
  };

  return (
    <div className="blood-stats-page">
      <h1>Blood Group Statistics</h1>
      <div className="blood-pouches-container">
        {renderBloodPouches()}
      </div>
      {renderDonationMessage()}
    </div>
  );
};

export default Bloodbank;
