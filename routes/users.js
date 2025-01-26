const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Import the database connection

// Example route to fetch all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Failed to fetch users' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Example route to add a user
router.post('/add', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Error adding user:', err);
      res.status(500).json({ error: 'Failed to add user' });
    } else {
      res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    }
  });
});

module.exports = router;
