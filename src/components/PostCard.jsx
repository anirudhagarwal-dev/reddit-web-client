import React from "react";
import "./PostCard.css";

export default function PostCard({ post }) {
  const p = post.data || post;
  
  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "k";
    return num;
  };

  return (
    <div className="post-card">
      <div className="post-sidebar">
        <button className="vote-btn">⬆</button>
        <span className="votes">{formatNumber(p.ups)}</span>
        <button className="vote-btn">⬇</button>
      </div>
      
      <div className="post-content">
        <div className="post-meta">
          <span className="subreddit-name">r/{p.subreddit}</span>
          <span className="post-author">Posted by u/{p.author}</span>
        </div>
        
        <h3 className="post-title">{p.title}</h3>
        
        {p.thumbnail && p.thumbnail.startsWith("http") && (
          <div className="post-media">
            <img src={p.thumbnail} alt="Post content" />
          </div>
        )}
        
        <div className="post-actions">
          <a 
            href={`https://reddit.com${p.permalink}`} 
            target="_blank" 
            rel="noreferrer" 
            className="action-btn"
          >
            💬 {formatNumber(p.num_comments)} Comments
          </a>
          <button className="action-btn">↪ Share</button>
          <button className="action-btn">🔖 Save</button>
        </div>
      </div>
    </div>
  );
}