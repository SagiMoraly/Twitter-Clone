const normalizePost = require("../collections/posts/helpers/normalizePost");
const validatePost = require("../collections/posts/models/joi/validatePost");
const Post = require("../collections/posts/models/mongoose/Post");
const normalizeUser = require("../collections/users/helpers/normalizeUser");
const registerValidation = require("../collections/users/models/joi/registerValidation");
const User = require("../collections/users/models/mongoose/User");
const data = require("./initialData.json");
const chalk = require("chalk");

const generateInitialPosts = async () => {
  const { posts } = data;
  const userId = "649d3238bac95e85fa0f0546";
  posts.forEach(async (post) => {
    try {
      const { error } = validatePost(post);
      if (error) throw new Error(`Joi Error: ${error.details[0].message}`);

      const normalizedPost = await normalizePost(post, userId);
      const postToDB = new Post(normalizedPost);
      await postToDB.save();
      console.log(chalk.greenBright(`Generate post '${"post"}' successfully`));
    } catch (error) {
      console.log(
        chalk.redBright(`Initial Data Generate Post Error: ${error.message}`)
      );
    }
  });
};

const generateInitialUsers = async () => {
  const { users } = data;

  users.forEach(async (user) => {
    try {
      const { error } = registerValidation(user);
      if (error) throw new Error(`Joi Error: ${error.details[0].message}`);

      const normalizedUser = normalizeUser(user);

      const userForBD = new User(normalizedUser);
      await userForBD.save();
      console.log(
        chalk.greenBright(`Generate User '${user.userName}' successfully`)
      );
    } catch (error) {
      console.log(
        chalk.redBright(`Initial Data Generate User Error: ${error.message}`)
      );
    }
  });
};

exports.generateInitialPosts = generateInitialPosts;
exports.generateInitialUsers = generateInitialUsers;
