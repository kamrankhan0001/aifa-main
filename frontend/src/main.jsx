import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ ADD
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google"; // ✅ ADD

// Wrap App with GoogleOAuthProvider and provide your client ID
const GOOGLE_CLIENT_ID = "102302847082-akr65u3c5e3elql1v2tpkpkh1aicchsl.apps.googleusercontent.com"; // Replace with your actual client ID

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
);
    