import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import playerRoute from "./routes/players";
import userRoute from "./routes/users";
require("dotenv").config();

const app = express();

//Cors Access
app.use(cors());

//Init Middleware
app.use(express.json({ extended: false }));

//Routes
app.use("/api/players", playerRoute);
app.use("/api/users", userRoute);

//env variables
const MONGO = process.env.MONGO_URI;

//Set dummy port
const port = 5001;

//Connect to Mongoose
const connectMongo = async () => {
  try {
    await mongoose.connect(MONGO, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    //Connection msg
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error.message);
    //exit
    process.exit(1);
  }
};

connectMongo();
app.listen(port, () => console.log("Server Connected"));
