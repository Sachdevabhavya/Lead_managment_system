require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const leadRoutes = require('./routes/leadRoutes');
const activityRoutes = require('./routes/activityRoutes');

app.use(express.json());
app.use('/main', userRoutes);
app.use('/main', leadRoutes);
app.use('/main', activityRoutes);

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.Mongo_URL)
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error("Failed to connect to the database", err);
    });
