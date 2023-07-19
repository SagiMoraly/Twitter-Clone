import UserInterface from "../../models/interfaces/UserInterface";

import { UserMapToModelType } from "../../models/types/userType";

const mapUserToModel = (user: UserInterface): UserMapToModelType => {
  return {
    // _id: user._id,
    userName: user.userName,
    email: user.email,
    password: user.password,
    first: user.profile.name.first,
    last: user.profile.name.last,
    bio: user.profile.bio,
    location: user.profile.location,
    url: user.profile.ProfilePicture.url,
    alt: user.profile.ProfilePicture.alt,
    BGurl: user.profile.BackGrounProfilePicture.BGurl,
    BGalt: user.profile.BackGrounProfilePicture.BGalt,
  };
};

export default mapUserToModel;
