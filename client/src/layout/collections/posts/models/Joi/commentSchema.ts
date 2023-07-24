import Joi from "joi";

const commentSchema = {
  content: Joi.string().min(2).max(256).required(),
};

export default commentSchema;
