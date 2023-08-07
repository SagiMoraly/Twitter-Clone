const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  getUserPosts,
  updatePost,
  likePost,
  deletePost,
  getFeed,
} = require("../controllers/postsController");
const {
  createComment,
  deleteComment,
} = require("../controllers/commentsController");
const auth = require("../../../middleware/auth/authService");
const router = express.Router();

router.get("/feed", auth, getFeed);
router.get("/", getPosts);
router.post("/", auth, createPost);
router.get("/:postId", getPost);
router.get("/postsUser/:userId", getUserPosts);
router.put("/:postId", auth, updatePost);
router.patch("/:postId", auth, likePost);
router.delete("/:postId", auth, deletePost);
router.post("/:postId", auth, createComment);
router.delete("/:postId/:commentId", auth, deleteComment);

module.exports = router;
