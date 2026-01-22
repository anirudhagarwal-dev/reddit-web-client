import React from "react";

export default function Login() {
  const CLIENT_ID = import.meta.env.VITE_REDDIT_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/auth/callback`;
  const SCOPES = "identity read";
  const DURATION = "temporary";

  function handleLogin() {
    const state = Math.random().toString(36).slice(2);
    const url = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${state}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&duration=${DURATION}&scope=${encodeURIComponent(SCOPES)}`;
    
    const width = 600;
    const height = 800;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    window.open(
      url, 
      "RedditAuth", 
      `width=${width},height=${height},left=${left},top=${top}`
    );

    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data.type === "LOGIN_SUCCESS" && event.data.token) {
        window.location.href = "/profile";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "60vh",
      textAlign: "center" 
    }}>
      <h2 style={{ marginBottom: 20, fontSize: 24 }}>Log in to Reddit</h2>
      <p style={{ marginBottom: 30, color: "#666" }}>
        Connect your Reddit account to access your personalized feed.
      </p>
      <button 
        onClick={handleLogin}
        style={{
          background: "#FF4500",
          color: "white",
          border: "none",
          padding: "12px 32px",
          borderRadius: "99px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}
      >
        Login with Reddit
      </button>
    </div>
  );
}