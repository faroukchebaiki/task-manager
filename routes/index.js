const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to the MongoDB Atlas database
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Parse incoming requests as JSON
app.use(bodyParser.json());

// Set up routes
app.use(require('./routes/users'));
app.use(require('./routes/roles/administrator'));
app.use(require('./routes/roles/manager'));
app.use(require('./routes/roles/worker'));
app.use(require('./routes/tasks'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
