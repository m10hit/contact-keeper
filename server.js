const express = require('express');
const app = express();
const users = require('./routes/users');
const auth = require('./routes/auth');
const contacts = require('./routes/contacts');
const connectDB = require('./config/db');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({ msg: 'Welcome to Contact Keeper API' }));

// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contacts', contacts);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
