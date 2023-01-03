# Task Manager

A simple task management application built with Node.js, Express, and MongoDB.

## Getting Started

1. Clone the repository

2. Install the dependencies

3. Set the `MONGODB_URL` environment variable to your MongoDB Atlas connection string
   export MONGODB_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority"

4. Start the server
   npm start
   The server will start on port 5000 by default.

## API Endpoints

### Users

- `POST /users`: Create a new user
- `POST /users/login`: Login an existing user
- `GET /users/me`: Get the currently authenticated user
- `POST /users/logout`: Logout the currently authenticated user
- `POST /users/logoutAll`: Logout the currently authenticated user from all devices

### Tasks

- `POST /tasks`: Create a new task
- `GET /tasks`: Get all tasks
- `GET /tasks/:id`: Get a specific task
- `PATCH /tasks/:id`: Update a task
- `DELETE /tasks/:id`: Delete a task

### Roles

- `GET /roles/administrators`: Get all administrators
- `POST /roles/administrators`: Create a new administrator
- `PATCH /roles/administrators/:id`: Update an administrator
- `GET /roles/managers`: Get all managers
- `POST /roles/managers`: Create a new manager
- `PATCH /roles/managers/:id`: Update a manager
- `GET /roles/workers`: Get all workers
- `POST /roles/workers`: Create a new worker
- `PATCH /roles/workers/:id`: Update a worker

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

my-project/
├── package.json
├── index.js
├── models/
│ ├── task.js
│ ├── user.js
│ └── roles/
│ ├── administrator.js
│ ├── manager.js
│ └── worker.js
└── routes/
├── index.js
├── tasks.js
└── users.js

models: This directory contains the Mongoose models for the different types of users and tasks in the application.
routes: This directory contains the route files for the different types of users and tasks in the application.
index.js: This file sets up the express server and connects to the MongoDB Atlas database. It also sets up the routes for the different types of users and tasks in the application. Finally, it starts the server and listens for incoming requests.
package.json: This file includes the dependencies and scripts for the application.
