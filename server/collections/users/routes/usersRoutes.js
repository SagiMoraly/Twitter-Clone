const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  isBusinessUser,
  deleteUser,
} = require("../controllers/usersController");
const auth = require("../../../middleware/auth/authService");

router.post("/", register);
router.post("/login", login);
router.get("/", auth, getUsers);
router.get("/:userId", auth, getUser);
router.put("/:userId", auth, updateUser);
router.delete("/:userId", auth, deleteUser);

module.exports = router;
