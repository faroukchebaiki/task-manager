const mongoose = require('mongoose');

// Define a MongoDB model for tasks
const taskSchema = new mongoose.Schema(
  {
    // Title of the task
    title: {
      type: String,
      required: true,
      trim: true,
    },
    // Detailed description of the task
    description: {
      type: String,
      required: true,
      trim: true,
    },
    // Status of the task (either "In progress" or "Completed")
    status: {
      type: String,
      default: 'In progress',
      enum: ['In progress', 'Completed'],
    },
    // Reference to the user object that represents the owner of the task
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    // Add timestamps to the task documents
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
/*This code defines a Task model with the following properties:

title: A required string that represents the title of the task.
description: A required string that contains a detailed description of the task.
status: A string that represents the status of the task. The default value is "In progress" and the only allowed values are "In progress" and "Completed".
owner: A required reference to a user object that represents the owner of the task. */
