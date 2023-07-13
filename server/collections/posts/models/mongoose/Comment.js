const mongoose = require("mongoose");

const DEFAULT_VALIDATION = {
  type: String,
  trim: true,
  minLength: 2,
  maxLength: 256,
  lowercase: true,
  required: true,
};

const schema = new mongoose.Schema({
  content: DEFAULT_VALIDATION,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Comment = mongoose.model("comment", schema);

module.exports = Comment;
