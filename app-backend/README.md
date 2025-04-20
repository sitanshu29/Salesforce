# App Backend

This is the backend server for the Salesforce-integrated application. It is built using Node.js, Express, and PostgreSQL, and includes authentication, Salesforce API integration, and other features.

## Features

- User authentication (registration and login) with JWT-based authorization.
- Integration with Salesforce for OAuth and data fetching.
- RESTful API endpoints for user and Salesforce operations.
- PostgreSQL database connection using `pg` library.
- Environment-based configuration using `.env` files.
- CORS support for cross-origin requests.

## Hosted Backend

The backend server is hosted at:

[https://salesforce-d00d.onrender.com](https://salesforce-d00d.onrender.com)

You can use this link to access the API endpoints.
> **⚠️ NOTE:** The backend server is hosted on a free tier service, which means it goes into sleep mode after 1 minute of inactivity. The server may take some time to wake up and respond to the first request.

## Prerequisites

Before running the server, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd app-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root of the `app-backend` directory and configure the following variables:

   ```env
   PORT=5000
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
   JWT_SECRET=<your_jwt_secret>

   # Salesforce credentials
   SALESFORCE_LOGIN_URL=https://login.salesforce.com
   SALESFORCE_CLIENT_ID=<your_salesforce_client_id>
   SALESFORCE_CLIENT_SECRET=<your_salesforce_client_secret>
   SALESFORCE_REDIRECT_URI=http://localhost:5000/salesforce/callback
   FRONTEND_URL=http://localhost:4200
   ```

4. Set up the PostgreSQL database:

   - Create a database in PostgreSQL.
   - Update the `DATABASE_URL` in the `.env` file with your database connection string.
   - Run the necessary SQL scripts to create the `users` table.

   Example SQL script:

   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL
   );
   ```

## Running the Server

### Development Mode

To start the server in development mode with live reloading:

```bash
npm run dev
```

### Production Mode

To build and start the server in production mode:

```bash
npm run build
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Authentication

- **POST** `/register` - Register a new user.
- **POST** `/login` - Log in an existing user.

### Salesforce Integration

- **GET** `/oauth/login` - Redirect to Salesforce OAuth login.
- **GET** `/salesforce/callback` - Handle Salesforce OAuth callback.
- **GET** `/salesforce/accounts` - Fetch Salesforce accounts (requires authentication).

## Project Structure

```
app-backend/
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── db.ts           # Database connection
│   ├── server.ts       # Main server file
│   ├── routes/         # API route handlers
│   ├── controllers/    # Business logic
│   ├── middleware/     # Middleware functions
│   ├── models/         # Database models
│   └── @types/         # Custom TypeScript type definitions
```

## Dependencies

- **Express**: Web framework for Node.js.
- **pg**: PostgreSQL client for Node.js.
- **bcryptjs**: Password hashing library.
- **jsonwebtoken**: Library for creating and verifying JWTs.
- **dotenv**: Environment variable management.
- **jsforce**: Salesforce API integration.

## Development Notes

- Ensure the frontend is running on `http://localhost:4200` for proper integration.
- The backend serves static files from the frontend build directory (`dist/app-frontend/browser`).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.