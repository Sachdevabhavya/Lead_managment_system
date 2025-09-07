# Lead managment system

# LMS Task

A simple Lead Management System (LMS) built with Node.js, Express, and MongoDB. This project provides RESTful APIs for managing users, leads, and activities, with JWT-based authentication.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- JWT authentication middleware
- CRUD operations for leads and activities
- Modular controllers, models, and routes
- Secure API endpoints

## Project Structure

```
app.js                  # Main application entry point
package.json            # Project dependencies and scripts
config/
	jwtConfig.js          # JWT secret and config
controllers/
	activityController.js # Logic for activities
	leadController.js     # Logic for leads
	userController.js     # Logic for users
middleware/
	auth.js               # JWT authentication middleware
models/
	Activity.js           # Mongoose model for activities
	Leads.js              # Mongoose model for leads
	User.js               # Mongoose model for users
routes/
	activityRoutes.js     # Routes for activities
	leadRoutes.js         # Routes for leads
	userRoutes.js         # Routes for users
utils/
	generateToken.js      # Utility for generating JWT tokens
```

## Installation

1. **Clone the repository:**

   ```sh
   git clone <repo-url>
   cd lms_task
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up MongoDB:**

   - Make sure MongoDB is running locally or provide a remote connection string.

4. **Configure environment variables:**
   - Create a `.env` file with your MongoDB URI and JWT secret:
     ```
     MONGO_URI=<your mongo_url>
     JWT_SECRET=<your_jwt_secret>
     ```

## Configuration

- `config/jwtConfig.js`: Stores JWT secret and configuration.
- `app.js`: Loads environment variables and connects to MongoDB.

## API Endpoints

### User

- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and receive JWT token

### Leads

- `GET /api/leads` — Get all leads 
- `POST /api/leads` — Create a new lead 
- `PUT /api/leads/:id` — Update a lead 
- `DELETE /api/leads/:id` — Delete a lead 

### Activities

- `GET /api/activities` — Get all activities
- `POST /api/activities` — Create a new activity 

## Authentication

- All protected routes require a JWT token.
- Add the token in the `Authorization` header as `Bearer <token>`.

## Usage

1. **Start the server:**
   ```sh
   npm start
   ```
2. **Test APIs using Postman:**
   - Register and login to get a token.
   - Add the token to the `Authorization` header for protected routes.
