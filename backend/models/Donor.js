const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  birthday: { type: Date },
  appointmentDateTime: { type: Date, required: true },
  bloodGroup: { type: String },
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
