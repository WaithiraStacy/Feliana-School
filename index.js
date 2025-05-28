import dotenv from "dotenv";
dotenv.config(); // Load .env variables

import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js"; // Import DB connection function

// Connect to MongoDB first
dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
});