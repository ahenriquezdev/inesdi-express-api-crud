const Post = require("../models/post.model");

// 1. POST /api/posts
const addPost = ((req, res) => {

  Post.create(req.body)
    .then((post) => {

      return res.status(201).send({
        succcess: true,
        message: "Post created successfully",
        data: post
      })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "Post creation failed"
      })
    })
})

// 2. GET /api/posts
const getPosts = ((req, res) => {

  Post.find({})
    .then((posts) => {

      return res.status(200).send({
        succcess: true,
        message: "Posts retrieved successfully",
        data: posts
      })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "Posts retrieval failed"
      })
    })
})

// 3. GET /api/posts/:id
const getPost = (req, res) => {

  Post.findById(req.params.id)
    .then((post) => {

      if (!post) {
        return res.status(404).send({
          succcess: false,
          message: "Post not found"
        })
      }
      res.send({
        succcess: true,
        message: "Post retrieved successfully",
        data: post
      })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "Post retrieval failed"
      })
    })
}

// 4. PATCH /api/posts/:id
const updatePost = ((req, res) => {

  Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((post) => {

      if (!post) {
        return res.status(404).send({
          succcess: false,
          message: "Post not found"
        })
      }
      res.send({
        succcess: true,
        message: "Post updated successfully",
        data: post
      })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "Post update failed",
        error: err
      })
    })
})

// 5. DELETE /api/posts/:id
const deletePost = ((req, res) => {

  Post.findByIdAndDelete(req.params.id)
    .then((post) => {

      if (!post) {
        return res.status(404).send({
          succcess: false,
          message: "Post not found"
        })
      }
      res.send({
        succcess: true,
        message: "Post deleted successfully"
      })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "Post deletion failed"
      })
    })
})

module.exports = {
  addPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
}
