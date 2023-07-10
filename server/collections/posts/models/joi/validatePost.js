const Joi = require("joi");

const REQUIRED_FIELD = Joi.string().min(2).max(256).required();
const NOT_REQUIRED = Joi.string().min(0).max(256).allow("");
const URL =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const message = (regex, message, required = true) => {
  if (required)
    return Joi.string()
      .ruleset.regex(regex)
      .rule({ message: message })
      .required();

  return Joi.string().ruleset.regex(regex).rule({ message: message }).allow("");
};

const validatePost = (post) => {
  const schema = Joi.object({
    content: REQUIRED_FIELD,
    image: Joi.object().keys({
      url: message(URL, 'post.image "url" must be a valid URL', false),
      alt: NOT_REQUIRED,
    }),
    comments: Joi.array().items(
      Joi.object().keys({
        content: REQUIRED_FIELD,
      })
    ),
  });

  return schema.validate(post);
};

module.exports = validatePost;
