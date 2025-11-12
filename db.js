// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URL;

if (!uri) {
  console.error("❌ MONGODB_URI is not defined in .env file");
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

module.exports = mongoose;