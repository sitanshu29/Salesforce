# 🚀 Salesforce-Integrated Application

Welcome to the **Salesforce-Integrated Application**! This project consists of a **backend server** and a **frontend application** designed to work seamlessly together to provide a robust and scalable solution for Salesforce integration.

## ✨ Features

- 🔒 **Backend**: Built with Node.js, Express, and PostgreSQL, featuring user authentication, Salesforce API integration, and RESTful endpoints.
- 🎨 **Frontend**: Developed with Angular, offering a responsive UI with server-side rendering (SSR) for better performance and SEO.
- 🔗 **Salesforce Integration**: OAuth-based authentication and data fetching from Salesforce.
- ⚡ **Quick Setup**: Easily set up and run the application locally or access the hosted versions.

---

## 🌐 Hosted Application

- 🌟 **Frontend**: [https://salesforce-frontend.onrender.com](https://salesforce-frontend.onrender.com)
- 🌟 **Backend**: [https://salesforce-d00d.onrender.com](https://salesforce-d00d.onrender.com)

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

## ⚙️ Quick Setup Instructions

1. **🔑 Environment Variables**:
   - Configure the `.env` file in the `app-backend` folder with the required credentials (e.g., Salesforce credentials, database URL, etc.).
   - Example `.env` file:
     ```env
     PORT=5000
     DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
     JWT_SECRET=<your_jwt_secret>
     SALESFORCE_CLIENT_ID=<your_salesforce_client_id>
     SALESFORCE_CLIENT_SECRET=<your_salesforce_client_secret>
     ```

2. **🗄️ Database Setup**:
   - Create a PostgreSQL database and run the necessary SQL scripts to set up the `users` table.

3. **▶️ Run the Application**:
   - Start the backend and frontend servers as described in the **Quick Start** section.

---

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Enjoy exploring the Salesforce-Integrated Application! 🚀✨