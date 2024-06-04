const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// Route to handle form submission
router.post('/donation', async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).json({ message: 'Donation appointment scheduled successfully!' });
  } catch (error) {
    console.error('Error scheduling donation:', error.message);
    res.status(500).json({ message: 'An error occurred while scheduling donation.' });
  }
});

module.exports = router;
