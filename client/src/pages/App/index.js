import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";

import userService from "../../utils/userService";
import { UserContext } from "../../context/UserContext";
import { ProtectedRoute } from "../../utils/route";
import NavBar from "../../components/NavBar/NavBar";
import ProtectedPage from "../ProtectedPage";

const colors = {
  Easy: ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD"],
  Moderate: ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD", "#B7D968"],
  Difficult: ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD", "#B7D968", "#555E7B"],
};

function App() {
  const [state] = React.useContext(UserContext);
  console.log(state);
  return (
    <div>
      <header className="header">
        <p>MERN Skeleton</p> <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/protected"
          element={
            <ProtectedRoute>
              <ProtectedPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
