# 📰 News Today

A full-stack **news and blog management web application** built with **React, Vite, Tailwind CSS, Node.js, and Express**. The platform allows users to browse news articles while providing an administrative interface for managing posts, users, authentication, and images.

The application uses a separate React frontend and Express backend architecture, with **MySQL** for data storage and **AWS S3** for image uploads and storage.

## ✨ Features

- 📰 News and article management
- ✍️ Create and edit blog/news posts
- 👤 User management
- 🔐 User authentication and authorization
- 🖼️ Image upload and storage
- ☁️ AWS S3 integration
- 🗄️ MySQL database
- 🔔 Toast and confirmation notifications
- 📱 Responsive interface
- 📝 Rich text editor with React Quill
- 🔎 News/content browsing
- 🧩 Separate frontend and backend architecture
- ⚡ REST API communication with Axios

## 🛠️ Tech Stack

### Frontend

- React 18
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Axios
- React Bootstrap
- React Quill
- React Icons
- React Hot Toast
- React Toastify

### Backend

- Node.js
- Express.js
- JavaScript
- REST API
- JWT Authentication
- Cookie Parser
- Multer

### Database & Storage

- MySQL
- MySQL2
- AWS S3
- AWS SDK

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│       React Frontend         │
│                              │
│  React + Vite + Tailwind CSS │
└──────────────┬───────────────┘
               │
               │ REST API
               ▼
┌──────────────────────────────┐
│       Express Backend        │
│                              │
│ Auth • Users • Posts • Image │
└──────────────┬───────────────┘
               │
          ┌────┴─────┐
          ▼          ▼
       MySQL       AWS S3
      Database     Images
# MySQL Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=

# JWT
JWT_SECRET=

# AWS S3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
