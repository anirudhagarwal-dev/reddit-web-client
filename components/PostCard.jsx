import React from "react";

export default function PostCard({ post }) {
  const p = post.data || post; // accept either raw data or child object
  return (
    <article style={{ background: "white", padding: 12, marginBottom: 10, borderRadius: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{p.title}</h3>
      {p.thumbnail && p.thumbnail.startsWith("http") && (
        <img src={p.thumbnail} alt="" style={{ maxWidth: 300, display: "block", marginBottom: 8 }} />
      )}
      <div style={{ fontSize: 14, color: "#666" }}>
        👍 {p.ups} • 💬 {p.num_comments}
      </div>
      <div style={{ marginTop: 8 }}>
        <a href={`https://reddit.com${p.permalink}`} target="_blank" rel="noreferrer">View on Reddit</a>
      </div>
    </article>
  );
}