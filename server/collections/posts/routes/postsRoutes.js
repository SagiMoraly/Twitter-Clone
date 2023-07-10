const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  getMyPosts,
  updatePost,
  likePost,
  deletePost,
} = require("../controllers/postsController");
const auth = require("../../../middleware/auth/authService");
const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.get("/:postId", getPost);
router.get("/my-posts/:userId", getMyPosts);
router.put("/:postId", auth, updatePost);
router.patch("/:postId", auth, likePost);
router.delete("/:postId", auth, deletePost);

module.exports = router;
