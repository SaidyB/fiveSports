import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./components/utils/GlobalContextReducer.jsx";
import { AuthProvider } from "./components/utils/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <AuthProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
   </AuthProvider>
  </BrowserRouter>
);
