const mongoose = require('mongoose');

// Define a MongoDB model for managers
const managerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
