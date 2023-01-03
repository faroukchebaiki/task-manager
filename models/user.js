const mongoose = require('mongoose');

// Define a MongoDB model for users
const userSchema = new mongoose.Schema(
  {
    // Email address of the user (must be unique)
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    // Password for the user account
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    // First name of the user
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    // Last name of the user
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    // Role of the user (either "Administrator", "Manager", or "Worker")
    role: {
      type: String,
      required: true,
      enum: ['Administrator', 'Manager', 'Worker'],
    },
  },
  {
    // Add timestamps to the user documents
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

/* This code defines a User model with the following properties:

email: A required, unique string that represents the email address of the user.
password: A required string that represents the password for the user account.
firstName: A required string that represents the first name of the user.
lastName: A required string that represents the last name of the user.
role: A required string that represents the role of the user. The allowed values are "Administrator", "Manager", and "Worker". */
