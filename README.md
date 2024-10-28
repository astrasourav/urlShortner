# URL Shortener

This project is a URL shortener built with Node.js, Express, MongoDB, and Mongoose. It’s designed to take a long URL as input, generate a short unique identifier, and allow users to access the original URL via the shortened link. This is my first project using backend technologies, focusing on implementing API routes and handling database interactions.

## Features
- Accepts a long URL, generates a unique short URL identifier, and saves it to a MongoDB database.
- Redirects users to the original URL when accessing the shortened URL.
- Keeps a timestamped record of each visit for tracking purposes.

## Technologies
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for setting up server routes and handling requests.
- **MongoDB & Mongoose**: NoSQL database to store URLs and visitor information.

## Project Structure
- **`model`**: Contains the MongoDB schema for storing URLs.
- **`controller`**: Handles generating short URLs and saving them to the database.
- **`routes`**: Defines the API endpoints for creating and redirecting URLs.
- **`connection.js`**: Manages the MongoDB database connection.

## How to Use
1. Clone the repository and install dependencies:
   ```bash
   git clone <repository-url>
   cd url_shortener
   npm install
