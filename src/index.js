// import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import RouterList from "./routes/RouterList";
// import RouterPages from "./router/RouterPages.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterPages } from "./router/RouterPages";

const queryMovie = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_ID}> */}
        {/* ... */}
        <RouterPages/>
      {/* </GoogleOAuthProvider> */}
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
