import jwt from "jsonwebtoken";
require("dotenv").config();

export default function (req, res, next) {
  //Get Token from Header
  const token = req.header("x-auth-token");

  //Check if token is there
  if (!token) {
    return res.status(401).json({ msg: "Authentication Denied" });
  }

  //Verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Authentication Denied" });
  }
}
