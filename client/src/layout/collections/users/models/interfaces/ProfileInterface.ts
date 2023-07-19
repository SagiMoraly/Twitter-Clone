import NameInterface from "./NameInterface";
import ProfilePictureInterface from "./ProfilePictureInterface";
import BackGroundProfilePictureInterface from "./BackGroundProfilePictureInterface";

interface ProfileInterface {
  name: NameInterface;
  bio: string;
  location: string;
  ProfilePicture: ProfilePictureInterface;
  backGroundProfilePicture: BackGroundProfilePictureInterface;
}

export default ProfileInterface;
