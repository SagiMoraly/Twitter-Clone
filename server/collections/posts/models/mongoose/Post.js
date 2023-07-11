const mongoose = require("mongoose");

const DEFAULT_VALIDATION = {
  type: String,
  trim: true,
  minLength: 2,
  maxLength: 256,
  lowercase: true,
  required: true,
};

const regexType = (regex, required = true, unique = false) => {
  return {
    type: String,
    required,
    match: RegExp(regex),
    unique,
    trim: true,
  };
};

const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const imageSchema = new mongoose.Schema({
  url: {
    ...regexType(URL_REGEX, false),
    validate: function () {
      if (this.url && !this.alt) {
        throw new Error("alt field is required when url field is provided");
      }
    },
  },
  alt: {
    type: String,
    trim: true,
    minLength: 0,
    maxLength: 256,
    required: function () {
      return !!this.url;
    },
  },
});

// const commentSchema = new mongoose.Schema({
//   content: DEFAULT_VALIDATION,
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//   },
// });

const schema = new mongoose.Schema({
  content: DEFAULT_VALIDATION,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },

  likes: [String],
  image: imageSchema,
  comments: [Object],
  tags: [String],
});

const Post = mongoose.model("post", schema);

module.exports = Post;
