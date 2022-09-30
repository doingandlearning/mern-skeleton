import React from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
  const [state] = React.useContext(UserContext);
  console.log(state);
  if (!state.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
