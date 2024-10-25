const express = require("express");
const router = express.Router();
const {
  addPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} = require("../controllers/post.controller");

const authMiddleware = require("../middlewares/auth.middleware");

// 1. POST /api/posts
router.post("/posts", authMiddleware, addPost)
// 2. GET /api/posts
router.get("/posts", authMiddleware, getPosts)
// 3. GET /api/posts/:id
router.get("/posts/:id", authMiddleware, getPost)
// 4. PUT /api/posts/:id
router.patch("/posts/:id", authMiddleware, updatePost)
// 5. DELETE /api/posts/:id
router.delete("/posts/:id", authMiddleware, deletePost)

module.exports = router
