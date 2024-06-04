const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  timeFrame: { type: String, required: true },
  reason: { type: String, required: true },
  selectedBloodTypes: { type: [String], required: true },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
