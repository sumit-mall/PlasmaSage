const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// Route to handle form submission
router.post('/request', async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();
    res.status(201).json({ message: 'Request submitted successfully!' });
  } catch (error) {
    console.error('Error submitting request:', error.message);
    res.status(500).json({ message: 'An error occurred while submitting the request.' });
  }
});

module.exports = router;
