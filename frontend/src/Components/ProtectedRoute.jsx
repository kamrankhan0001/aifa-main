import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // LocalStorage se token check karein
  const token = localStorage.getItem("token");

  // Agar token nahi hai, toh user ko home page "/" par redirect kar dein
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Agar token hai, toh requested page (children) dikhayein
  return children;
};

export default ProtectedRoute;