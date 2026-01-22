import React, { useState } from "react";
import "./PostCard.css";

export default function PostCard({ post }) {
  const p = post.data || post;
  
  const [vote, setVote] = useState(0); // 0: none, 1: up, -1: down
  const [score, setScore] = useState(p.ups);
  const [saved, setSaved] = useState(false);

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "k";
    return num;
  };

  const handleVote = (type) => {
    if (type === "up") {
      if (vote === 1) {
        setVote(0);
        setScore(score - 1);
      } else {
        setScore(score + (vote === -1 ? 2 : 1));
        setVote(1);
      }
    } else {
      if (vote === -1) {
        setVote(0);
        setScore(score + 1);
      } else {
        setScore(score - (vote === 1 ? 2 : 1));
        setVote(-1);
      }
    }
  };

  return (
    <div className="post-card">
      <div className="post-sidebar">
        <button 
          className={`vote-btn ${vote === 1 ? "active-up" : ""}`}
          onClick={() => handleVote("up")}
        >
          ⬆
        </button>
        <span className={`votes ${vote === 1 ? "up" : vote === -1 ? "down" : ""}`}>
          {formatNumber(score)}
        </span>
        <button 
          className={`vote-btn ${vote === -1 ? "active-down" : ""}`}
          onClick={() => handleVote("down")}
        >
          ⬇
        </button>
      </div>
      <div className="post-content">
        <div className="post-meta">
          <span className="subreddit-name">r/{p.subreddit}</span>
          <span className="post-author">Posted by u/{p.author}</span>
        </div>
        <h3 className="post-title">{p.title}</h3>
        {p.thumbnail && (p.thumbnail.startsWith("http") || p.thumbnail === "self") ? (
           p.thumbnail.startsWith("http") ? (
            <div className="post-media">
              <img src={p.thumbnail} alt="Post content" />
            </div>
           ) : null
        ) : null}
        
        {p.selftext && <p className="post-text">{p.selftext}</p>}

        <div className="post-actions">
          <a 
            href={p.permalink.startsWith("http") ? p.permalink : `https://reddit.com${p.permalink}`} 
            target="_blank" 
            rel="noreferrer" 
            className="action-btn"
          >
            💬 {formatNumber(p.num_comments)} Comments
          </a>
          <button className="action-btn">↪ Share</button>
          <button 
            className={`action-btn ${saved ? "active-save" : ""}`}
            onClick={() => setSaved(!saved)}
          >
            {saved ? "🔖 Saved" : "🔖 Save"}
          </button>
        </div>
      </div>
    </div>
  );
}