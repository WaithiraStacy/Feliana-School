import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:");
    console.error(error.message);
  }
};