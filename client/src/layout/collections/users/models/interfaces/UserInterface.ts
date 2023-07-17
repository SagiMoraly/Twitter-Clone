import ProfileInterface from "./ProfileInterface";

interface UserInterface {
  _id: string;
  userName: string;
  email: string;
  password: string;
  profile: ProfileInterface;
  followers: string[];
  following: string[];
}

export default UserInterface;
