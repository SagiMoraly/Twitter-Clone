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
router.get("/", auth, getUsers);
router.get("/:userId", auth, getUser);
router.put("/:userId", auth, updateUser);
router.delete("/:userId", auth, deleteUser);
router.patch("/follow/:userId", auth, followUser);
router.get("/followers/:userId", auth, followersUser);
router.get("/following/:userId", auth, followingUser);

module.exports = router;
