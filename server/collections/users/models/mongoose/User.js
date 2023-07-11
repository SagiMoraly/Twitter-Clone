const mongoose = require("mongoose");

const DEFAULT_VALIDATION = {
  type: String,
  required: true,
  minLength: 2,
  maxLength: 256,
  trim: true,
};

const URL_VALIDATION = {
  type: String,
  match: RegExp(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
  ),
  trim: true,
  lowercase: true,
};

const Name = new mongoose.Schema({
  first: DEFAULT_VALIDATION,
  last: DEFAULT_VALIDATION,
});

const Image = new mongoose.Schema({
  url: URL_VALIDATION,
  alt: DEFAULT_VALIDATION,
});

const Profile = new mongoose.Schema({
  name: Name,
  bio: {
    type: String,
    minLength: 2,
    maxLength: 256,
    trim: true,
  },
  location: {
    type: String,
    maxLength: 256,
    trim: true,
    default: "",
  },
  profilePicture: Image,
  backGrounProfilePicture: Image,
});

const schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    trim: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  profile: Profile,
  followers: [String],
  following: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("user", schema);

module.exports = User;
