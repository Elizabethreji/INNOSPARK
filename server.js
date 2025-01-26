const express = require('express');
const path = require('path'); // For handling file paths
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',  // Database host (localhost)
  user: 'root',       // Your MySQL username
  password: 'Athira2004@', // Your MySQL password
  database: 'ecoswap', // Your database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err.message);
    process.exit(1); // Exit the process if the connection fails
  } else {
    console.log('Connected to the MySQL database');
  }
});

// Routes
app.get('/', (req, res) => {
  // Redirect to signup.html when visiting the root route
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/signup.html', (req, res) => {
  // Serve signup.html when the '/signup.html' route is accessed
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// User Routes
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err.message);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    res.status(200).json(results);
  });
});

// Add a user route
app.post('/users/add', (req, res) => {
  const { name, email } = req.body;

  // Validation check
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Error adding user:', err.message);
      return res.status(500).json({ error: 'Failed to add user' });
    }
    res.status(201).json({ message: 'User added successfully', userId: result.insertId });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
