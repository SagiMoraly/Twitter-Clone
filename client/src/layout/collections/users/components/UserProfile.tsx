import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { userType } from "../hooks/useUser";
import { CardMedia, Avatar, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useUserLoged } from "../providers/UserProvider";

type PostProps = {
  user: userType;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const UserProfile: React.FC<PostProps> = ({ onDelete, onLike, user }) => {
  const navigate = useNavigate();
  const { user: userLoged } = useUserLoged();
  // console.log(user.profile.backGroundProfilePicture.BGurl);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  if (user)
    return (
      <>
        <MuiCard sx={{}} elevation={0}>
          {/* User Avatar and Name */}
          <CardActionArea
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              if (userLoged?._id === user._id)
                navigate(`${"/edit/user"}/${user._id}`);
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={user.profile.backGroundProfilePicture.BGurl}
            />
            <div
              style={{ marginLeft: "20px", position: "relative", top: "-90px" }}
            >
              <Avatar
                alt={user.profile.profilePicture.alt}
                src={user.profile.profilePicture.url}
                sx={{
                  marginLeft: "20px",
                  width: 180,
                  height: 180,
                  border: "6px solid black",
                  backgroundColor: "white",
                  color: "white",
                }}
              />
              {isHovered && userLoged?._id === user._id && (
                <EditOutlinedIcon
                  fontSize="large"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginRight: 10,
                  }}
                ></EditOutlinedIcon>
              )}
              <Typography variant="h5" mt={2} mb={3}>
                {user.userName}
              </Typography>{" "}
              <Typography>{user.profile.bio}</Typography>{" "}
              {/* <span style={{ marginTop: "30px" }}></span> */}
            </div>
          </CardActionArea>
          <Typography style={{ opacity: 0.6, fontWeight: "lighter" }}>
            <CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>
            joind at: {user.createdAt}
          </Typography>
          <Typography
            style={{ opacity: 0.6, fontWeight: "lighter" }}
          ></Typography>
          <Typography>
            followers: {user.followers.length} following:{" "}
            {user.following.length}
          </Typography>{" "}
        </MuiCard>
        <div style={{ borderTop: "15px solid #e7ecf0" }}></div>
      </>
    );
  return null;
};

export default UserProfile;
