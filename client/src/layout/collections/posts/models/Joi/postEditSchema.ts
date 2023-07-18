import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const postEditSchema = {
  _id: Joi.string(),
  content: Joi.string().min(2).max(256).required(),
  url: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'post.image "url" mast be a valid url' })
    .allow(""),
  alt: Joi.string().min(2).max(256).allow(""),
  author: Joi.string(),
};

export default postEditSchema;
