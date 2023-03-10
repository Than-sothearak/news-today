import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { AuthContexProvider } from "./context/authContext.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContexProvider>
    <App />
    <Toaster />
    </AuthContexProvider>
  </React.StrictMode>,
)
