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
router.get("/my-posts/:userId", getMyPosts); //giving all posts
router.put("/:postId", auth, updatePost);
router.patch("/:postId", auth, likePost);
router.delete("/:postId", auth, deletePost);

module.exports = router;
//not working
// GET /api/posts/feed: Get my posts.

// DELETE /api/posts/:postId/comment/:commentId: Delete a comment from a post.
// POST /api/posts/:postId/comment: Add a comment to a post.
// GET /api/posts/feed: Get a feed of posts from followed users.
// GET /api/posts/:postId/comments: Get comments for a specific post.?

///////////////done//////////////
// DELETE /api/posts/:postId: Delete a post by post ID.
// POST /api/posts/:postId/like: Like a post/Unlike.
// PUT /api/posts/:postId: Update a post by post ID.
// POST /api/posts: Create a new post.
// GET /api/posts/:postId: Retrieve a post by post ID.
// GET /api/posts/: Get all the posts.