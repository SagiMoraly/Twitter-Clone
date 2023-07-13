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

const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const user = req.user;

    let postOld = await Post.findById(postId);
    postComments = postOld.comments;
    if (!postComments)
      throw new Error("A post with this ID cannot be found in the database");

    const comment = await postComments.find(
      (post) => post._id.toString() == commentId
    );

    if (!user.isAdmin)
      if (user._id != comment.author)
        throw new Error(
          "You must be the one who made the comment or admin type user in order to delete it"
        );

    const comments = await postComments.filter(
      (post) => post._id.toString() != commentId
    );
    if (comments === null)
      throw new Error("A comment with this ID cannot be found in the database");

    postOld.comments = comments;
    const postNew = await postOld.save();

    return res.send(postNew);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.createComment = createComment;
exports.deleteComment = deleteComment;
