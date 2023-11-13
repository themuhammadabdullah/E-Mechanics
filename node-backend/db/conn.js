// db.js

const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/eMechanics'; // Use the IP address 127.0.0.1
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection = mongoose.connection;

dbConnection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

dbConnection.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = dbConnection;