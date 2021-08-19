import "./styles.css";
import LandingPage from "./components/LandingPage/LandingPage";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MentorsPage from "./components/MentorsPage/MentorsPage";

import { UserContext } from "./components/UserContext/UserContext";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    language: "",
    hobbies: "",
    age: "",
    bio: ""
  });

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/" exact component={LandingPage} />
          <Route path="/details" component={UserDetailsPage} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/mentors" component={MentorsPage} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}
