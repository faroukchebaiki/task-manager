const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


const app = express();

// Parse incoming request bodies in a middleware before your handlers
app.use(express.json());

// Connect to the MongoDB Atlas cluster
mongoose.connect(
  'mongodb+srv://farouk:mohamed@cluster0.x3oyycz.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Define routes
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/users', require('./routes/users'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
