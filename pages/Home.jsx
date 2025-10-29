import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReddit } from "../context/RedditContext";

export default function Home() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const { setSubreddit } = useReddit();

  function go(e) {
    e.preventDefault();
    if (!q) return;
    setSubreddit(q);
    navigate(`/r/${q}`);
  }

  return (
    <div>
      <h2>Search Subreddit</h2>
      <form onSubmit={go}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. space" style={{ padding: 8, marginRight: 8 }} />
        <button type="submit">Open</button>
      </form>
      <p style={{ marginTop: 12 }}>Or try: <a href="/r/popular">popular</a>, <a href="/r/memes">memes</a></p>
    </div>
  );
}
