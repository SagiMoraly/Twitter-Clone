const { generateUserPassword } = require("./bcrypt");

const normalizeUser = (rawUser) => {
  const profile = {
    ...rawUser.name,
    ...(rawUser.bio || ""),
    ...(rawUser.location || ""),
    ...rawUser.profilePicture,
    url:
      rawUser.image.url ||
      "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
    alt: rawUser.image.alt || "User image",
    ...rawUser.backGrounProfilePicture,
    url:
      rawUser.image.url ||
      "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png",
    alt: rawUser.image.alt || "User profile image",
  };

  const user = {
    ...rawUser,
    profile,
    password: generateUserPassword(rawUser.password),
  };

  return user;
};

module.exports = normalizeUser;
