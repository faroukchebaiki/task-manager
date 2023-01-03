const mongoose = require('mongoose');

// Define a MongoDB model for workers
const workerSchema = new mongoose.Schema({
  // Reference to the user object that represents the worker
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
