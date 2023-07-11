const normalizePost = (rawPost, author) => {
  const image = {
    ...rawPost.image,
    url: rawPost.image?.url || "",
    alt: rawPost.image?.alt || "",
  };

  console.log(rawPost.image, "no problem here", rawPost, author);
  const post = {
    ...rawPost,
    image,

    author: rawPost.author || author,
  };
  return post;
};

module.exports = normalizePost;
