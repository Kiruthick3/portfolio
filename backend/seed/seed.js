require("dotenv").config();
const connectDB = require("../config/db");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const seed = async () => {
  try {

    await connectDB();

    // Check if admin exists
    const existingAdmin = await User.findOne({ 
      email: process.env.ADMIN_EMAIL || "admin@example.com" 
    });

    if (existingAdmin) {
      console.log(" Admin already exists");
    } else {
      // Create admin
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(
        process.env.ADMIN_PASSWORD || "Password123!", 
        salt
      );

      const admin = await User.create({
        email: process.env.ADMIN_EMAIL || "admin@example.com",
        password: hashed
      });
      console.log("✨ Admin created:", admin.email);
    }

    console.log("Seeding completed without deleting any data.");
    process.exit(0);
  } catch (err) {
    console.error(" Seeding error:", err);
    process.exit(1);
  }
};

seed();
