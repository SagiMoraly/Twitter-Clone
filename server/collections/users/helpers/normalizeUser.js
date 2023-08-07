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
      "https://media.licdn.com/dms/image/D4D16AQFiguoafFcmRg/profile-displaybackgroundimage-shrink_350_1400/0/1688554604486?e=1695859200&v=beta&t=AkZ0tcWxrC99y5C9lPn11o8zAP_v0D-AKsyXzhkYX6M",
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
  return user;
};

const normalizeEditUser = (rawUser) => {
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
      "https://media.licdn.com/dms/image/D4D16AQFiguoafFcmRg/profile-displaybackgroundimage-shrink_350_1400/0/1688554604486?e=1695859200&v=beta&t=AkZ0tcWxrC99y5C9lPn11o8zAP_v0D-AKsyXzhkYX6M",
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
  };
  return user;
};

module.exports = { normalizeUser, normalizeEditUser };
