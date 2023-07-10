const normalizePost = async (rawPost, author) => {
  const image = {
    url: rawPost.image.url || "",
    alt: rawPost.image.alt || "",
  };

  return {
    ...rawPost,
    image,

    author: rawPost.author || author,
  };
};

module.exports = normalizePost;
