## Reddit Web Client

A **Reddit-like web client** built with **React and Vite**, featuring a secure **popup-based OAuth 2.0 authentication flow** and a lightweight **Node.js + Express backend** for token exchange.  
The UI mirrors Reddit’s familiar layout with **left navigation**, a **central feed**, and **right-side widgets**, along with **dark mode** and **responsive design**.

---

## 📌 About the Project

This project is designed primarily for **learning and experimentation**. It demonstrates how to:

- Build a modern **Single Page Application (SPA)** using React and React Router
- Integrate a **third-party OAuth 2.0 provider (Reddit)** using a secure backend
- Implement a **popup-based login flow** without redirecting the main window
- Create a **Reddit-style, three-column responsive layout**
- Handle API failures gracefully using **dummy data fallbacks**

You can use this project as:
- A starter template for Reddit-style applications
- A reference for implementing **OAuth popup flows**
- A simple example of **frontend–backend coordination** in React apps

---

## ✨ Features

- 🔐 **OAuth 2.0 Login (Popup-based)**  
  Login via Reddit without navigating away from the app

- 🛡 **Secure Token Exchange**  
  Tokens are exchanged through a Node/Express backend

- 📄 **Subreddit Browsing**  
  Browse subreddits with `hot`, `new`, and `top` filters

- 📰 **Popular Feed**  
  Includes **dummy post fallback** if Reddit API fails or rate-limits

- ✍️ **Create Post (Local Draft)**  
  Create a post draft that appears instantly in the feed

- 👍 **Post Interactions (Local State)**  
  Upvote, downvote, and save posts (UI-only, local state)

- 🌙 **Dark Mode**  
  Theme switching using CSS variables

- 📱 **Responsive Layout**  
  - Desktop: 3-column layout (Left Sidebar, Feed, Right Sidebar)
  - Mobile: Sidebars hidden for simplicity

---

## 🧰 Tech Stack

### Frontend
- React + Vite
- React Router
- React Context API (`RedditStore.js`)

### Backend
- Node.js
- Express
- OAuth token exchange with Reddit

---

## 🔑 OAuth Flow (Popup-based)

1. User clicks **Login** in the app.
2. A popup opens to Reddit’s authorization page.
3. After approval, Reddit redirects to `/auth/callback` inside the popup.
4. The popup sends the token back to the main window using `postMessage`.
5. The popup closes automatically.
6. The token is stored locally and used for requests to `oauth.reddit.com`.

✔️ The main window never leaves your site.

---

## ⚠️ Notes

- ❌ No secrets are committed — add your own Reddit OAuth credentials
- 🔄 Dummy posts are used if Reddit’s API fails or rate-limits
- 📱 Mobile view hides sidebars for better usability

---

## 🧪 Functionality Summary

### Authentication
- OAuth popup login
- Secure backend token exchange
- Profile fetch via `/api/v1/me`

### Subreddit Browsing
- Dynamic routes: `/r/:name`
- Fetch and display top posts

### Post Feed
- Displays title, author, score, thumbnail, and self-text

### Local Interactions
- Upvote, downvote, and save (UI-only state)

### Create Post
- Draft UI that prepends a new post to the feed locally

---

## 🚀 Getting Started

```bash
# Install frontend dependencies
cd reddit-frontend
npm install

# Start frontend
npm run dev

# Install backend dependencies
cd reddit-backend
npm install

# Start backend
npm start