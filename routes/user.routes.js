const express = require("express");
const router = express.Router();
const { addUser, getUsers, login, logout } = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// 1. POST /api/users
router.post("/users", addUser)

// 2. POST /api/users/login
router.post("/login", login)

// 3. GET /api/users
router.get("/users", authMiddleware, getUsers)

// 4. GET api/users/logout
router.get("/logout", logout)

module.exports = router
