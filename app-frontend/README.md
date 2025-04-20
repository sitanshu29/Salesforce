# App Frontend

This is the frontend application for the Salesforce-integrated project. It is built using Angular and supports server-side rendering (SSR) for improved performance and SEO.

## Features

- Built with Angular 19.
- Server-side rendering (SSR) using Angular Universal.
- Responsive design with Bootstrap 5.
- Integration with the backend server for authentication and Salesforce data.
- Environment-based configuration for development and production.

## Hosted Application

The frontend application is hosted at:

[https://salesforce-frontend.onrender.com](https://salesforce-frontend.onrender.com)

You can visit this link to access the live application.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (v15 or higher recommended)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd app-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment files:

   - Update the environment files in `src/environments/` for development and production configurations.

## Running the Application

### Development Server

To start a local development server using `ng serve`:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Server-Side Rendering (SSR)

To build and serve the application with SSR:

1. Build the application:

   ```bash
   npm run build
   ```

2. Serve the SSR application:

   ```bash
   npm run serve:ssr
   ```

The SSR server will run on `http://localhost:4000/` by default.

## Building the Application

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Project Structure

```
app-frontend/
├── .editorconfig         # Editor configuration
├── .gitignore            # Git ignore rules
├── angular.json          # Angular CLI configuration
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── index.html        # Main HTML file
│   ├── main.ts           # Main entry point for the application
│   ├── main.server.ts    # Entry point for server-side rendering
│   ├── app/
│   │   ├── app.component.ts  # Root component
│   │   ├── app.config.ts     # Application configuration
│   │   ├── app.routes.ts     # Application routes
│   │   ├── services/         # Angular services
│   │   └── pages/            # Application pages
│   └── environments/         # Environment-specific configurations
```

## Dependencies

- **Angular**: Frontend framework.
- **Bootstrap**: CSS framework for responsive design.
- **Angular Universal**: Server-side rendering for Angular applications.

## Development Notes

- The frontend communicates with the backend server hosted at [https://salesforce-d00d.onrender.com](https://salesforce-d00d.onrender.com).
- Ensure the backend server is running and accessible for full functionality.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.