const { generateAuthToken } = require("../../../middleware/auth/Providers/jwt");
const { handleError } = require("../../../utils/handleErrors");
const { comparePassword } = require("../helpers/bcrypt");
const {
  normalizeUser,
  normalizeEditUser,
} = require("../helpers/normalizeUser");
const loginValidation = require("../models/joi/loginValidation");
const registerValidation = require("../models/joi/registerValidation");
const User = require("../models/mongoose/User");

const register = async (req, res) => {
  try {
    const user = req.body;
    const { email } = user;
    const { error } = registerValidation(user);
    console.log("im here");
    if (error)
      return handleError(
        res,
        400,
        `Joi register Error: ${error.details[0].message}`
      );

    const isUserExistInDB = await User.findOne({ email });
    if (isUserExistInDB) throw new Error("User already registered");
    const normalizedUser = normalizeUser(user);
    const userForBD = new User(normalizedUser);
    const userFromDB = await userForBD.save();
    res.send(userFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const login = async (req, res) => {
  try {
    const user = req.body;
    const { email } = user;
    const { error } = loginValidation(user);
    console.log("why im here");
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const userInDb = await User.findOne({ email });
    if (!userInDb)
      throw new Error("Authentication Error: Invalid email or password");

    const isPasswordValid = comparePassword(user.password, userInDb.password);
    if (!isPasswordValid)
      throw new Error("Authentication Error: Invalid email or password");

    const { _id, isAdmin, profile, userName } = userInDb;
    const { profilePicture } = profile;
    const { url, alt } = profilePicture;

    const token = generateAuthToken({ _id, isAdmin, userName, url, alt });

    res.send(token);
  } catch (error) {
    const isAuthError =
      error.message === "Authentication Error: Invalid email or password";

    return handleError(
      res,
      isAuthError ? 403 : 500,
      `Mongoose Error: ${error.message}`
    );
  }
};

const getUsers = async (req, res) => {
  try {
    const user = req.user;

    const users = await User.find().sort({ createdAt: "descending" });
    return res.send(users);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    let user = req.user;

    user = await User.findById(userId);

    if (!user)
      throw new Error("A user with this ID cannot be found in the database");

    return res.send(user);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const updateUser = async (req, res) => {
  try {
    let user = req.body;
    const { userId } = req.params;
    if (!(user._id === userId))
      throw new Error("A user dose not have the ability to use this function");
    user = await normalizeEditUser(user);
    user = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });
    if (!user)
      throw new Error("A user with this ID cannot be found in the database");

    return res.send(user);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    let user = req.user;

    if (!user.isAdmin)
      if (!(user._id === userId))
        throw new Error(
          "A user dose not have the ability to use this function"
        );

    user = await User.findByIdAndDelete(userId);

    if (!user)
      throw new Error("A user with this ID cannot be found in the database");

    return res.send(user);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.register = register;
exports.login = login;
