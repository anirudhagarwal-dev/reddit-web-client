import React, { createContext, useState, useContext } from "react";

const RedditContext = createContext();

export function RedditProvider({ children }) {
  const [subreddit, setSubreddit] = useState("popular");
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem("reddit_token") || null);

  function saveToken(token) {
    setAccessToken(token);
    if (token) localStorage.setItem("reddit_token", token);
    else localStorage.removeItem("reddit_token");
  }

  return (
    <RedditContext.Provider value={{ subreddit, setSubreddit, accessToken, saveToken }}>
      {children}
    </RedditContext.Provider>
  );
}

export function useReddit() {
  return useContext(RedditContext);
}
