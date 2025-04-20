# 🚀 Salesforce-Integrated Application

Welcome to the **Salesforce-Integrated Application**! This project consists of a **backend server** and a **frontend application** designed to work seamlessly together to provide a robust and scalable solution for Salesforce integration.

---

## 🌐 Live Application

- 🌟 **Frontend**: [https://salesforce-frontend.onrender.com](https://salesforce-frontend.onrender.com)
- 🌟 **Backend**: [https://salesforce-d00d.onrender.com](https://salesforce-d00d.onrender.com)

---

## ✨ Features

- 🔒 **Backend**: Built with Node.js, Express, and PostgreSQL, featuring user authentication, Salesforce API integration, and RESTful endpoints.
- 🎨 **Frontend**: Developed with Angular, offering a responsive UI with server-side rendering (SSR) for better performance and SEO.
- 🔗 **Salesforce Integration**: OAuth-based authentication and data fetching from Salesforce.
- ⚡ **Quick Setup**: Easily set up and run the application locally or access the hosted versions.

---

## 🎥 Demo Video

Check out the demo video to see the application in action:

[Watch Demo]([url](https://youtu.be/NnUOdVBBLEM))

---

## 🏗️ Architecture and Approach

### Architecture Overview

1. **Frontend**:
   - Built with Angular for a modular and scalable UI.
   - Server-side rendering (SSR) using Angular Universal for better SEO and performance.
   - Communicates with the backend via RESTful APIs.

2. **Backend**:
   - Built with Node.js and Express for a lightweight and efficient server.
   - PostgreSQL database for secure and reliable data storage.
   - Integrates with Salesforce APIs for OAuth authentication and data fetching.

3. **Integration**:
   - The frontend and backend are decoupled, allowing independent development and deployment.
   - Environment-based configurations for seamless deployment in different environments.

### Challenges Faced

- **Salesforce OAuth Integration**: Handling the OAuth flow and token management required careful implementation to ensure security and reliability.
- **Server-Side Rendering (SSR)**: Implementing SSR in Angular required additional configuration and debugging to ensure compatibility with the backend.
- **Free Tier Hosting**: Hosting on free-tier services introduced latency due to server sleep modes, which required user-friendly messaging to handle delays.

---

## ⚡ Quick Start

Follow these steps to quickly test the application locally:

1. **📂 Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd Salesforce
   ```

2. **🛠️ Set Up the Backend**:
   - Navigate to the backend folder:
     ```bash
     cd app-backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **🎨 Set Up the Frontend**:
   - Navigate to the frontend folder:
     ```bash
     cd ../app-frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     ng serve
     ```

4. **🌐 Access the Application**:
   - Open your browser and navigate to [http://localhost:4200](http://localhost:4200).

---

## 📁 Project Structure

```
Salesforce/
├── app-backend/          # Backend server
│   ├── README.md         # Backend-specific documentation
│   ├── src/              # Backend source code
│   └── ...               # Other backend files
├── app-frontend/         # Frontend application
│   ├── README.md         # Frontend-specific documentation
│   ├── src/              # Frontend source code
│   └── ...               # Other frontend files
└── README.md             # Root documentation (this file)
```

---

## 📖 Detailed Documentation

- 📄 **Backend Documentation**: [app-backend/README.md](app-backend/README.md)
- 📄 **Frontend Documentation**: [app-frontend/README.md](app-frontend/README.md)

---

## ⚙️ Deployment Instructions

### Backend Deployment

1. Set up a PostgreSQL database and configure the `.env` file with the required credentials.
2. Deploy the backend server to a hosting platform like Render, Heroku, or AWS.
3. Ensure the backend server is accessible via a public URL.

### Frontend Deployment

1. Build the Angular application for production:
   ```bash
   npm run build
   ```
2. Deploy the build artifacts (in the `dist/` folder) to a hosting platform like Netlify, Vercel, or AWS S3.
3. Ensure the frontend is configured to communicate with the backend server.

---

## 🌟 Future Features

Here are some features that can be added in the future to enhance the application:

- 📊 **Dashboard**: Add a user-friendly dashboard to display Salesforce data visually (e.g., charts, graphs).
- 🔐 **Login Directly to Salesforce**: Directly login to Salesforce account as an when the user logs in.
- 🔍 **Advanced Search**: Add advanced filtering and search capabilities for Salesforce data.

---

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Enjoy exploring the Salesforce-Integrated Application! 🚀✨
