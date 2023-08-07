const { handleError } = require("../../../utils/handleErrors");
const User = require("../models/mongoose/User");

const followUser = async (req, res) => {
  try {
    const followingUserId = req.user._id;
    const followedUserId = req.params.userId;

    if (followingUserId === followedUserId)
      throw new Error("You cant follow yourself");

    let followingUser = await User.findById(followingUserId);
    let followedUser = await User.findById(followedUserId);

    if (!followingUser)
      throw new Error(
        "A followingUser with this ID cannot be found in the database"
      );
    if (!followedUser)
      throw new Error(
        "A followedUser with this ID cannot be found in the database"
      );
    const AmIFollowingUser = followingUser.following.find(
      (id) => id === followedUserId
    );
    const AmIFollowedUser = followedUser.following.find(
      (id) => id === followingUserId
    );

    if (!AmIFollowingUser) {
      followingUser.following.push(followedUserId);
      if (!AmIFollowedUser) {
        followedUser.followers.push(followingUserId);
        followedUser = await followedUser.save();
      }
      followingUser = await followingUser.save();
      return res.send(followingUser);
    }

    followingUser.following = followingUser.following.filter(
      (id) => id !== followedUserId
    );
    followedUser.followers = followedUser.followers.filter(
      (id) => id !== followingUserId
    );
    followedUser = await followedUser.save();
    followingUser = await followingUser.save();

    return res.send(followingUser);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const followersUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    let users = await User.find();
    const theUser = users.find((user) => user._id.toString() === userId);
    const listOfFollowers = theUser.followers;

    const filteredArray = users.filter((user) =>
      listOfFollowers.includes(user._id)
    );

    return res.send(filteredArray);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const followingUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    let users = await User.find();
    const theUser = users.find((user) => user._id.toString() === userId);
    const listOfFollowing = theUser.following;
    const filteredArray = users.filter((user) =>
      listOfFollowing.includes(user._id)
    );

    return res.send(filteredArray);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.followUser = followUser;
exports.followersUser = followersUser;
exports.followingUser = followingUser;
