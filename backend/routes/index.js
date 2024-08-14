// ./routes/index.js
const express = require("express");
const router = express.Router();

// Example data for demonstration
const posts = [
  {
    _id: "1",
    title: "First Post",
    content: "This is the first post",
    author: "Author 1",
  },
  {
    _id: "2",
    title: "Second Post",
    content: "This is the second post",
    author: "Author 2",
  },
];

// Define the /posts route
router.get("/posts", (req, res) => {
  res.json(posts);
});

module.exports = router;

// module.exports = {
//   // Other ESLint configurations...
//   plugins: ["unused-imports"],
//   rules: {
//     "unused-imports/no-unused-imports": "error",
//     "unused-imports/no-unused-vars": "error",
//   },
// };
