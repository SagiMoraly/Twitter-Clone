import NameInterface from "./NameInterface";
import ProfilePictureInterface from "./ProfilePictureInterface";
import BackGrounProfilePictureInterface from "./BackGrounProfilePictureInterface";

interface ProfileInterface {
  name: NameInterface;
  bio: string;
  location: string;
  ProfilePicture: ProfilePictureInterface;
  BackGrounProfilePicture: BackGrounProfilePictureInterface;
}

export default ProfileInterface;
