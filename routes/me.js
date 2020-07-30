import { Router } from "express";
import User from "../models/User";
import auth from "../middleware/authentication.js";
import jwt from "jsonwebtoken";
require("dotenv").config();

const router = Router();

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
