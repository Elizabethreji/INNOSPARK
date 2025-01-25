const db = require("../config/db");

// Update user table
exports.updateUser = (req, res) => {
  const { id, name, email } = req.body;

  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  db.query(sql, [name, email, id], (err, result) => {
    if (err) return res.status(500).send("Error updating user");
    res.send("User updated successfully");
  });
};

// Fetch all users
exports.getUsers = (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send("Error fetching users");
    res.json(results);
  });
};
