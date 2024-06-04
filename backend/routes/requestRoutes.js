const express = require('express');
const router = express.Router();
const Request = require('../models/Request');


router.post('/request', async (req, res) => {
  try {
    const donor = new Request(req.body);
    await donor.save();
    res.status(201).json({ message: 'Request scheduled successfully!' });
  } catch (error) {
    console.error('Error scheduling donation:', error.message);
    res.status(500).json({ message: 'An error occurred while scheduling requests.' });
  }
});


router.get('/request', async (req, res) => {
  try {
    const donations = await Request.find();
    res.status(200).json(donations);
  } catch (error) {
    console.error('Error fetching requests:', error.message);
    res.status(500).json({ message: 'An error occurred while fetching requests.' });
  }
});

module.exports = router;
