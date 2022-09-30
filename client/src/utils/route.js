import React from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [state] = React.useContext(UserContext);

  if (!state.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
