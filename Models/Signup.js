const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const router = express.Router();

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  dob: String,
  branch: String,
  rollNo: String,
  section: String,
  address: String,
  mobileNo: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Signup API
router.post("/signup", async (req, res) => {
  try {
    const { name, fatherName, dob, branch, rollNo, section, address, mobileNo, password } = req.body;

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      fatherName,
      dob,
      branch,
      rollNo,
      section,
      address,
      mobileNo,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

