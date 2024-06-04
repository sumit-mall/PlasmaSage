const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const database = require('./database');
const app = express();
const requestRoutes = require('./routes/requestRoutes')
const donationRoutes = require('./routes/donationRoutes')

app.use(cors());
app.use(express.json())

app.use("/api/requestRoutes" ,requestRoutes)
app.use("/api/donationRoutes" ,donationRoutes)


const port = process.env.PORT || 4000;

app.get("/" , (req, res) => {
    res.json()
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });