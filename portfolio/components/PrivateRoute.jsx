import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { setAuthToken } from "../api/api";

export default function PrivateRoute({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token);
  }, []);

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}
