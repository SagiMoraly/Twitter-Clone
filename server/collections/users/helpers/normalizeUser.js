const { generateUserPassword } = require("./bcrypt");

const normalizeUser = (rawUser) => {
  const profilePicture = {
    ...rawUser.profile.profilePicture,
    url:
      rawUser.profile.profilePicture.url ||
      "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
    alt: rawUser.profile.profilePicture.alt || "User image",
  };

  const backGrounProfilePicture = {
    ...rawUser.profile.backGrounProfilePicture,
    url:
      rawUser.profile.backGrounProfilePicture.url ||
      "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png",
    alt: rawUser.profile.backGrounProfilePicture.alt || "User profile image",
  };

  const profile = {
    ...rawUser.profile,
    bio: rawUser.profile.bio || "",
    location: rawUser.profile.location || "",
    profilePicture: profilePicture,
    backGrounProfilePicture: backGrounProfilePicture,
  };

  const user = {
    ...rawUser,
    profile,
    password: generateUserPassword(rawUser.password),
  };
  return user;
};

module.exports = normalizeUser;
