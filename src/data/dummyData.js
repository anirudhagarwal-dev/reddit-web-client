export const dummyPosts = [
  {
    data: {
      id: "d1",
      title: "Welcome to Reddit!",
      author: "system_admin",
      subreddit: "announcements",
      ups: 15400,
      num_comments: 420,
      created_utc: Date.now() / 1000,
      thumbnail: "self",
      permalink: "/r/announcements/welcome",
      selftext: "This is a dummy post to show you how the interface looks even without internet connection or API access. Feel free to upvote!"
    }
  },
  {
    data: {
      id: "d2",
      title: "What is your favorite programming language in 2026?",
      author: "dev_enthusiast",
      subreddit: "programming",
      ups: 892,
      num_comments: 156,
      created_utc: Date.now() / 1000 - 3600,
      thumbnail: "self",
      url: "https://example.com",
      permalink: "/r/programming/fav-lang"
    }
  },
  {
    data: {
      id: "d3",
      title: "Look at this cute cat!",
      author: "cat_lover_99",
      subreddit: "aww",
      ups: 25600,
      num_comments: 890,
      created_utc: Date.now() / 1000 - 7200,
      thumbnail: "https://placekitten.com/300/200",
      url: "https://placekitten.com/300/200",
      permalink: "/r/aww/cute-cat"
    }
  },
  {
    data: {
      id: "d4",
      title: "NASA lands on Mars (Again)",
      author: "space_news",
      subreddit: "science",
      ups: 45000,
      num_comments: 2300,
      created_utc: Date.now() / 1000 - 10000,
      thumbnail: "default",
      permalink: "/r/science/mars"
    }
  },
  {
    data: {
      id: "d5",
      title: "TIFU by deleting the production database",
      author: "junior_dev",
      subreddit: "tifu",
      ups: 12000,
      num_comments: 560,
      created_utc: Date.now() / 1000 - 86400,
      thumbnail: "self",
      permalink: "/r/tifu/db-delete"
    }
  }
];