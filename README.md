# Pharmacy Management System - Backend

This is the backend part of the Pharmacy Management System, a web application designed to manage pharmacies, drugs, and orders.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Pharmacy Management System is a web application that allows users to manage pharmacies, drugs inventory, and orders. The backend is built using Node.js, Express, and MongoDB as the database.

## Features

- RESTful API endpoints for managing pharmacies, drugs, and orders
- User authentication and authorization
- MongoDB database integration for storing application data
- Error handling and validation for API requests
- JWT-based authentication system for securing routes

## Technologies Used

- Node.js: JavaScript runtime for building server-side applications
- Express.js: Web application framework for Node.js
- MongoDB: NoSQL database for storing application data
- Mongoose: MongoDB object modeling tool for Node.js
- JSON Web Tokens (JWT): Industry standard for securing API endpoints
- bcrypt: Library for hashing passwords
- Express Validator: Middleware for input validation and sanitization
- Passport.js: Authentication middleware for Node.js
- Morgan: HTTP request logger middleware for Node.js

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/your-username/pharmacy-management-system-backend.git

2. Navigate to the project directory:

cd pharmacy-management-system-backend

3. Install dependencies:

npm install

4. Configure environment variables:

- Rename .env.example to .env
- Update .env file with your MongoDB connection URI, JWT secret, and other configuration options

5. Start the development server:

npm start

6. The server should now be running on http://localhost:3000.

## API Endpoints

- GET /api/pharmacies: Get list of pharmacies
- POST /api/pharmacies: Create a new pharmacy
- GET /api/pharmacies/:id: Get details of a specific pharmacy
- PUT /api/pharmacies/:id: Update details of a specific pharmacy
- DELETE /api/pharmacies/:id: Delete a specific pharmacy
- GET /api/drugs: Get list of drugs
- POST /api/drugs: Create a new drug
- GET /api/drugs/:id: Get details of a specific drug
- PUT /api/drugs/:id: Update details of a specific drug
- DELETE /api/drugs/:id: Delete a specific drug
- GET /api/orders: Get list of orders
- POST /api/orders: Create a new order
- GET /api/orders/:id: Get details of a specific order
- PUT /api/orders/:id: Update details of a specific order
- DELETE /api/orders/:id: Delete a specific order

## Database Schema

The database schema consists of collections for users, pharmacies, drugs, and orders. Each collection has its own schema defined using Mongoose.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
