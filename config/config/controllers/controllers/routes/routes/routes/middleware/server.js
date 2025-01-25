require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // To handle cross-origin requests

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow requests from different origins

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',  // Database host (localhost if not set in .env)
  user: 'root',  // Database user
  password: 'Athira2004@',  // Database password
  database: 'ecoswap',  // Database name
});

// Establish MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1);
  }
  console.log('Connected to the MySQL database!');
});

// Route to add a product
app.post('/add-product', (req, res) => {
  const { name, description, price, category } = req.body;

  // Basic validation
  if (!name || !price) {
    return res.status(400).json({ message: 'Product name and price are required!' });
  }

  // Query to insert data into the products table
  const query = `
    INSERT INTO products (name, description, price, category)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, description, price, category], (err, result) => {
    if (err) {
      console.error('Error inserting product:', err);
      return res.status(500).json({ message: 'Failed to insert product' });
    }
    res.status(201).json({
      message: 'Product added successfully',
      productId: result.insertId, // Return the newly created product's ID
    });
  });
});

// Route to fetch all products
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      return res.status(500).json({ message: 'Failed to fetch products' });
    }
    res.status(200).json(results); // Return all products as JSON
  });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
