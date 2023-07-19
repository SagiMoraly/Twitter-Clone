import {
  UserMapToModelType,
  UserMapToModelEditType,
} from "../../models/types/userType";

export const normalizeUser = (user: UserMapToModelType) => {
  return {
    // _id: user._id,
    userName: user.userName,
    email: user.email,
    password: user.password,
    profile: {
      name: {
        first: user.first,
        last: user.last,
      },
      bio: user.bio,
      location: user.location,
      profilePicture: {
        url: user.url,
        alt: user.alt,
      },
      backGrounProfilePicture: {
        BGurl: user.BGurl,
        BGalt: user.BGalt,
      },
    },
  };
};

export const normalizedEditUser = (user: UserMapToModelEditType) => {
  return {
    _id: user._id,
    userName: user.userName,
    email: user.email,
    password: user.password,
    profile: {
      name: {
        first: user.first,
        last: user.last,
      },
      bio: user.bio,
      location: user.location,
      profilePicture: {
        url: user.url,
        alt: user.alt,
      },
      backGrounProfilePicture: {
        BGurl: user.BGurl,
        BGalt: user.BGalt,
      },
    },
  };
};
