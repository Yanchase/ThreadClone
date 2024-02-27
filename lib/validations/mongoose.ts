import mongoose from "mongoose";

let isConnected = false; // to check the stutas of mongodb

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL NOT FOUND");

  if (isConnected) return console.log("Already connect to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Can not connect to MongoDB:" + error);
  }
};
