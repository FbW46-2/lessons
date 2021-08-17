const express = require("express");
const { check, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../model/User");

//localhost:3000/user/signup
router.post(
  "/signup",
  [
    check("username", "Please enter a user name").notEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      //Check if user already exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ msg: "User Already Exists" });
      }
    } catch (error) {
      res.status(500).send("Error in Saving!");
    }
  }
);
