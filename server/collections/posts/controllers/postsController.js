const { handleError } = require("../../../utils/handleErrors");
const User = require("../../users/models/mongoose/User");
const normalizePost = require("../helpers/normalizePost");
const validatePost = require("../models/joi/validatePost");
const Post = require("../models/mongoose/Post");

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const user = req.user;

    const { error } = validatePost(post);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const normalizedPost = normalizePost(post, user._id);
    const postToDB = new Post(normalizedPost);
    const postFromDB = await postToDB.save();

    res.send(postFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: "-1" });
    return res.send(posts);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post)
      throw new Error("A post with this ID cannot be found in the database");

    return res.send(post);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ author: userId });
    return res.send(post);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const updatePost = async (req, res) => {
  try {
    let post = req.body;
    const { postId } = req.params;
    post = await normalizePost(post);
    post = await Post.findByIdAndUpdate(postId, post, {
      new: true,
    });
    if (!post)
      throw new Error("A post with this ID cannot be found in the database");

    return res.send(post);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;
    let post = await Post.findById(postId);

    if (!post)
      throw new Error("A post with this ID cannot be found in the database");

    const postLikes = post.likes.find((id) => id === userId);

    if (!postLikes) {
      post.likes.push(userId);
      post = await post.save();
      return res.send(post);
    }

    post.likes = post.likes.filter((id) => id !== userId);
    post = await post.save();

    return res.send(post);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const user = req.user;

    const post = await Post.findByIdAndDelete(postId);

    if (!post)
      throw new Error("A post with this ID cannot be found in the database");

    if (!user.isAdmin)
      if (user._id != post.author)
        throw new Error(
          "You must be a business or admin type user in order to delete a business post"
        );

    return res.send(post);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getFeed = async (req, res) => {
  try {
    const user = req.user;
    const myUser = await User.findById(user._id);
    let following = myUser.following;
    following.push(user._id);

    const posts = await Post.find().sort({ timestamp: "-1" });
    let feed = posts.filter((post) =>
      following.includes(post.author.toHexString())
    );

    return res.send(feed);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.getPosts = getPosts;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.getUserPosts = getUserPosts;
exports.updatePost = updatePost;
exports.likePost = likePost;
exports.createPost = createPost;
exports.getFeed = getFeed;
