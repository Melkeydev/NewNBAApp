import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import playerRoute from "./routes/players";
import userRoute from "./routes/users";
import playerStatsRoute from "./routes/playersStats";
import meRoute from "./routes/me";
import path from 'path'
require("dotenv").config();

const app = express();

//Cors Access
app.use(cors());

//Init Middleware
app.use(express.json({ extended: false }));

//Routes
app.use("/api/players", playerRoute);
app.use("/api/users", userRoute);
app.use("/api/playerStats", playerStatsRoute);
app.use("/api/me", meRoute);

//Serve Static Assets
if(process.env.NODE_ENV === 'production'){
  //Set Static Folder
  app.use(express.static('client/build'))

  app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
  })
}

//env variables
const MONGO = process.env.MONGO_URI;

//Set dummy port
const port = process.env.PORT;

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
app.listen(process.env.PORT || 5000, () => console.log("Server Connected"));
