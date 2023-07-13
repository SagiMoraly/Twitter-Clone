const Joi = require("joi");

const REQUIRED_FIELD = Joi.string().min(2).max(256).required();

const validateComment = (comment) => {
  const schema = Joi.object({
    content: REQUIRED_FIELD,
  });

  return schema.validate(comment);
};

module.exports = validateComment;
