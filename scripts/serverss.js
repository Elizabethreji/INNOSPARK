/*const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Athira2004@',
    database: 'ecoswap'
});

// Check the connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err.message);
    } else {
        console.log('Connected to MySQL database successfully!');
    }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Signup route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err.message);
            return res.status(500).send('Error hashing password');
        }

        // SQL query to insert a new user into the database
        const query = `
            INSERT INTO users (username, email, password_hash, full_name, eco_points)
            VALUES (?, ?, ?, ?, 0)
        `;
        db.query(query, [name, email, hashedPassword, name], (err, result) => {
            if (err) {
                console.error('Database insert error:', err.message);
                return res.status(500).send('Error inserting user into database');
            }
            console.log('User inserted successfully:', result);
            res.redirect('/index.html'); // Redirect after successful signup
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
*/
