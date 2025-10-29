import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReddit } from "../context/RedditContext";

export default function AuthCallback() {
  const [msg, setMsg] = useState("Authenticating...");
  const navigate = useNavigate();
  const { saveToken } = useReddit();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    if (!code) {
      setMsg("No code returned.");
      return;
    }

    // Send code to backend to exchange for access token
    const backend = import.meta.env.VITE_BACKEND || "http://localhost:4000";
    fetch(`${backend}/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.access_token) {
          saveToken(data.access_token);
          setMsg("Login successful — redirecting to profile...");
          setTimeout(() => navigate("/profile"), 800);
        } else {
          console.error("Token response:", data);
          setMsg("Token exchange failed. Check backend logs.");
        }
      })
      .catch((err) => {
        console.error(err);
        setMsg("Network error during token exchange.");
      });
  }, []);

  return <h3>{msg}</h3>;
}
