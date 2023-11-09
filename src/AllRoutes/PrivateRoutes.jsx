import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {

  const location = useLocation();
  const authError = useSelector(store => store.authReducer.authError);
  const token = localStorage.getItem("global_Consultancy_token") || "";

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;