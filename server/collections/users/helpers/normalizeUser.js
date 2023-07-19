const { generateUserPassword } = require("./bcrypt");

const normalizeUser = (rawUser) => {
  const profilePicture = {
    ...rawUser.profile.profilePicture,
    url:
      rawUser.profile.profilePicture.url ||
      "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
    alt: rawUser.profile.profilePicture.alt || "User image",
  };

  const backGroundProfilePicture = {
    ...rawUser.profile.backGroundProfilePicture,
    BGurl:
      rawUser.profile.backGroundProfilePicture.BGurl ||
      "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png",
    BGalt:
      rawUser.profile.backGroundProfilePicture.BGalt || "User profile image",
  };

  const profile = {
    ...rawUser.profile,
    bio: rawUser.profile.bio || "",
    location: rawUser.profile.location || "",
    profilePicture: profilePicture,
    backGroundProfilePicture: backGroundProfilePicture,
  };

  const user = {
    ...rawUser,
    profile,
    password: generateUserPassword(rawUser.password),
  };
  console.log(user);
  return user;
};

module.exports = normalizeUser;
