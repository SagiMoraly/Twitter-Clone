const normalizeComment = (rawComment, author) => {
  const comment = {
    ...rawComment,
    author: rawComment.author || author,
  };
  return comment;
};

module.exports = normalizeComment;
