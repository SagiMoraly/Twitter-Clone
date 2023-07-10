const express = require("express");
const router = express.Router();
const postsRoutes = require("../collections/posts/routes/postsRoutes");
const usersRoutes = require("../collections/users/routes/usersRoutes");
const { handleError } = require("../utils/handleErrors");

router.use("/posts", postsRoutes);
router.use("/users", usersRoutes);

router.use((req, res) => handleError(res));

module.exports = router;
