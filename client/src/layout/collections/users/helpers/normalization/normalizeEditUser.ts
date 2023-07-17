import { UserMapToModelEditType } from "../../models/types/userType";

const normalizeEditUser = (user: UserMapToModelEditType) => {
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
        url: user.url,
        alt: user.alt,
      },
    },
  };
};

export default normalizeEditUser;
