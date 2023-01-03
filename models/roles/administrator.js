const mongoose = require('mongoose');

// Define a MongoDB model for administrators
const administratorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Administrator = mongoose.model('Administrator', administratorSchema);

module.exports = Administrator;
/* user: A required reference to a user object that represents the administrator. */
