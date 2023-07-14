const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const {
  followUser,
  followersUser,
  followingUser,
} = require("../controllers/followUsersController");
const auth = require("../../../middleware/auth/authService");

router.post("/", register);
router.post("/login", login);
router.get("/", auth, getUsers); //move to admin
router.get("/:userId", auth, getUser);
router.put("/:userId", auth, updateUser);
router.delete("/:userId", auth, deleteUser);
router.patch("/follow/:userId", auth, followUser);
router.get("/followers/:userId", auth, followersUser);
router.get("/following/:userId", auth, followingUser);

module.exports = router;

///////////////done////////////////
// GET /api/users/:userId/followers: Get followers of a specific user.
// GET /api/users/:userId/following: Get users followed by a specific user.
// patch /api/users/follow/:userId: Follow another user/unfollow. the user followed get a follower
// DELETE /api/users/:userId: Delete user account by user ID.
// PUT /api/users/:userId: Update user profile by user ID.
// GET /api/users/:userId: Retrieve user profile by user ID.
// POST /api/users/login: User login and authentication.
// POST /api/users: Create a new user account.
