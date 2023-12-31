import UserInterface from "../../models/interfaces/UserInterface";

import { UserMapToModelType } from "../../models/types/userType";

const mapUserToModel = (user: UserInterface): UserMapToModelType => {
  return {
    userName: user.userName,
    email: user.email,
    password: user.password,
    first: user.profile.name.first,
    last: user.profile.name.last,
    bio: user.profile.bio,
    location: user.profile.location,
    url: user.profile.profilePicture.url,
    alt: user.profile.profilePicture.alt,
    BGurl: user.profile.backGroundProfilePicture.BGurl,
    BGalt: user.profile.backGroundProfilePicture.BGalt,
  };
};

export default mapUserToModel;
