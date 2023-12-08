import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@material-tailwind/react";
import { RouterPages } from "./router/RouterPages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ThemeProvider>
      <RouterPages />
      <ToastContainer />
      </ThemeProvider>
      <RouterPages />
      <ToastContainer />
    </React.StrictMode>
);
