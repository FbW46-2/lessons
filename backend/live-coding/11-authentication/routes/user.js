const express = require("express");
const { check, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../model/User");
const auth = require("../middleware/auth");

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
      let existingUser = await User.findOne({ email });

      //console.log("User email: ", email);

      if (existingUser) {
        return res.status(400).json({ msg: "User Already Exists" });
      }

      //Create a new user
      const newUser = new User({
        username, //
        email,
        password, //"password": "1234"
      });

      //console.log("User: ", user);
      //hash the password for the new user in order to save to DB
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      //console.log(user.password);

      await newUser.save();

      //Create a payload with user ID in order to create JWT
      const payload = {
        newUser: {
          id: newUser.id,
          username: newUser.username,
        },
      };

      console.log(payload);

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (error) {
      res.status(500).send("Error in Saving!");
    }
  }
);

//User login
router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //Check if user already exists
      let existingUser = await User.findOne({ email });

      //console.log("User email: ", email);

      if (!existingUser) {
        return res.status(400).json({ msg: "User Not Exist" });
      }

      const isMatch = await bcrypt.compare(password, existingUser.password);

      if (!isMatch) {
        return res.status(400).json({
          message: "Incorrect Password!",
        });
      }

      //Create a new user
      // const newUser = new User({
      //   username, //
      //   email,
      //   password, //"password": "1234"
      // });

      //console.log("User: ", user);
      //hash the password for the new user in order to save to DB
      // const salt = await bcrypt.genSalt(10);
      // newUser.password = await bcrypt.hash(password, salt);
      //console.log(user.password);

      // await newUser.save();

      //Create a payload with user ID in order to create JWT
      const payload = {
        existingUser: {
          id: existingUser.id,
        },
      };

      console.log(payload);

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (error) {
      res.status(500).send("Server Error!");
    }
  }
);

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router;
