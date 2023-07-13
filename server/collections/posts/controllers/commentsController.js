const { handleError } = require("../../../utils/handleErrors");
const normalizeComment = require("../helpers/normalizeComment");
const validateComment = require("../models/joi/validateComment");
const Comment = require("../models/mongoose/Comment");
const Post = require("../models/mongoose/Post");

const createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const comment = req.body;
    const user = req.user;

    const { error } = validateComment(comment);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    let post = await Post.findById(postId);
    if (!post)
      throw new Error("A post with this ID cannot be found in the database");

    const normalizedComment = normalizeComment(comment, user._id);
    const commentToDB = Comment(normalizedComment);
    post.comments.push(commentToDB);
    post = await post.save();
    return res.send(post);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.createComment = createComment;
