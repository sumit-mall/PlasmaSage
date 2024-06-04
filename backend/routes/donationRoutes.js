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

// Route to fetch all donations
router.get('/donation', async (req, res) => {
  try {
    const donations = await Donor.find();
    res.status(200).json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error.message);
    res.status(500).json({ message: 'An error occurred while fetching donations.' });
  }
});

module.exports = router;
