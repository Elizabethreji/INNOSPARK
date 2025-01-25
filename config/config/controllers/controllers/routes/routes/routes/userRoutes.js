const express = require("express");
const router = express.Router();
const { updateUser, getUsers } = require("../controllers/userController");

router.put("/update", updateUser);
router.get("/users", getUsers);

module.exports = router;
