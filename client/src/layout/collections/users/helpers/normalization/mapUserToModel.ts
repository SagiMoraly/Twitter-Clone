import UserInterface from "../../models/interfaces/UserInterface";

import { UserMapToModelType } from "../../models/types/userType";

const mapUserToModel = (user: UserInterface): UserMapToModelType => {
  return {
    _id: user._id,
    userName: user.userName,
    email: user.email,
    password: user.password,
    first: user.profile.name.first,
    last: user.profile.name.last,
    last: user.profile.bio,
    last: user.profile.location,
    last: user.profile.ProfilePicture.url,
    last: user.profile.ProfilePicture.alt,
    last: user.profile.BackGrounProfilePicture.url,
    last: user.profile.BackGrounProfilePicture.alt,
  };
};

export default mapUserToModel;
