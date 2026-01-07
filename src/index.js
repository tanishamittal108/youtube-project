// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env"
})


connectDB()




/*
import express from "express"
const app = express()
( async () => {
  try{
    await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
    app.on("errror", (error) => {
      console.log("Failed to connect to the database");
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    })

  }catch(error){
    console.error("Error connecting to the database", error);
    throw error
    
  }
})()

*/