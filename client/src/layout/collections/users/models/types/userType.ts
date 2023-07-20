export type UserNameType = { first: string; middle?: string; last: string };

export type ProfilePicture = { url?: string; alt?: string };
export type backGroundProfilePicture = { BGurl?: string; BGalt?: string };

export type Profile = {
  name: UserNameType;
  bio: string;
  location: string;
  profilePicture: ProfilePicture;
  backGroundProfilePicture: backGroundProfilePicture;
};

type UserType = {
  userName: string;
  email: string;
  password: string;
  profile: Profile;
};

export type UserTypeEdit = UserType & {
  _id: string;
};

export type TokenType = { _id: string; isAdmin: boolean; userName: string };

export type Login = Pick<UserType, "email" | "password">;

export type RegistrationForm = {
  first: string;
  last: string;
  userName: string;
  email: string;
  password: string;
  bio: string;
  location: string;
  url: string;
  alt: string;
  BGurl: string;
  BGalt: string;
};

export type UserMapToModelType = {
  first: string;
  last: string;
  userName: string;
  email: string;
  password: string;
  bio: string;
  location: string;
  url: string;
  alt: string;
  BGurl: string;
  BGalt: string;
};

export type UserMapToModelEditType = {
  _id: string;
  first: string;
  last: string;
  userName: string;
  email: string;
  password: string;
  bio: string;
  location: string;
  url: string;
  alt: string;
  BGurl: string;
  BGalt: string;
};

export type RegistrationFormErrors = Partial<RegistrationForm>;

export type UserRegistered = {
  name: {
    first: string;
    last: string;
    _id?: string;
  };
  email: string;
  _id: string;
};

export type NormalizedEditUser = {
  _id: string;
  userName: string;
  email: string;
  password: string;
  profile: {
    name: {
      first: string;
      last: string;
    };
    bio: string;
    location: string;
    ProfilePicture: {
      url: string;
      alt: string;
    };
    backGroundProfilePicture: {
      BGurl: string;
      BGalt: string;
    };
  };
};

export type UserFromClientType = {
  first: string;
  last: string;
  userName: string;
  email: string;
  password: string;
  bio: string;
  location: string;
  url: string;
  alt: string;
  BGurl: string;
  BGalt: string;
};

export default UserType;

export type CreateUserErrors = Partial<UserFromClientType>;
