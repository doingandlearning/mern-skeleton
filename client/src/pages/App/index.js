import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";

import userService from "../../utils/userService";
import { UserContext } from "../../context/UserContext";

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
      <header className="header-footer">MERN Skeleton</header>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        {/* <ProtectedRoute
          exact
          path="/high-scores"
          component={
            <HighScoresPage
              scores={this.state.scores}
              handleUpdateScores={this.handleUpdateScores}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
