import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { RouterPages } from './router/RouterPages';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@material-tailwind/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ThemeProvider>
      <RouterPages />
      <ToastContainer />
      </ThemeProvider>
    </React.StrictMode>
);
