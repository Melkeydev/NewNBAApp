import { Router } from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import auth from "../middleware/authentication";

//import User schema
import User from "../models/User";

/**
 * @Route POST routes/users
 * @desc register user
 * @acess Public
 */

const router = Router();

//Register a new User

router.post(
  "/",
  [
    check("first_name", "First Name is required").not().isEmpty(),
    check("last_name", "Last Name is required").not().isEmpty(),
    check("email", "Valid Email is required").isEmail(),
    check("password", "Password must be atleast 6 characters long").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    //check if errors exits and send erray array with the error message
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name, last_name, email, password } = req.body;

    try {
      //Check if the user already exists by their email
      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      //If no user found
      user = new User({
        first_name,
        last_name,
        email,
        password,
      });

      //Use bcrypt for password
      //salt - 14 is Bryan Saltiness
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //return JWT
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

/**
 * @Route post routes/users/login
 * @desc login user
 * @access Public
 */

//Login User
router.post(
  "/login",
  [
    check("email", "Valid email is required").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //Check if a user exists in the DB with email
      let user = await User.findOne({ email: email });

      //If user does not exists throw response
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User does not exist" }] });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      //Check if the passwords match!
      if (!passwordMatch) {
        return res.status(400).json({ errors: [{ msg: "Incorret Password" }] });
      }

      //return jwt

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

//Given a token, return a user

/**
 * @Route get routes/users/
 * @desc authenticatre user & get their token
 * @acces
 */

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("sever error");
  }
});

export default router;
