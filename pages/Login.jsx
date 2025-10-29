import React from "react";

export default function Login() {
  const CLIENT_ID = import.meta.env.VITE_REDDIT_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/auth/callback`;
  const SCOPES = "identity read";
  const DURATION = "temporary"; // 'permanent' if you want refresh token (needs backend storage)

  function handleLogin() {
    const state = Math.random().toString(36).slice(2);
    const url = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${state}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&duration=${DURATION}&scope=${encodeURIComponent(SCOPES)}`;
    window.location.href = url;
  }

  return (
    <div>
      <h2>Login with Reddit</h2>
      <p>Click to sign in — you'll be redirected to Reddit.</p>
      <button onClick={handleLogin}>Login with Reddit</button>
    </div>
  );
}
