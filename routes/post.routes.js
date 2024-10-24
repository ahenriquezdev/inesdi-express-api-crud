const express = require("express");
const router = express.Router();
const {
  addPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} = require("../controllers/post.controller");

// 1. POST /api/posts
router.post("/posts", addPost)
// 2. GET /api/posts
router.get("/posts", getPosts)
// 3. GET /api/posts/:id
router.get("/posts/:id", getPost)
// 4. PUT /api/posts/:id
router.patch("/posts/:id", updatePost)
// 5. DELETE /api/posts/:id
router.delete("/posts/:id", deletePost)

module.exports = router
