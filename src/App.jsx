import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import AuthCallback from "../pages/AuthCallback.jsx";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Subreddit from "../pages/Subreddit";

export default function App() {
  return (
    <div>
      <header style={{ background: "#ff4500", padding: 12, color: "white", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 700 }}>PostStream</div>
        <nav>
          <Link to="/" style={{ color: "white", marginRight: 12 }}>Home</Link>
          <Link to="/login" style={{ color: "white", marginRight: 12 }}>Login</Link>
          <Link to="/profile" style={{ color: "white" }}>Profile</Link>
        </nav>
      </header>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/r/:name" element={<Subreddit />} />
        </Routes>
      </main>
    </div>
  );
}
