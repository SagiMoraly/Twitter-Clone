import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUserLoged } from "../../layout/collections/users/providers/UserProvider";
import UserInterface from "../../layout/collections/users/models/interfaces/UserInterface";

type FollowButtonProps = {
  following: string[];
  curUser: UserInterface;
  onFollow: (_id: string) => void;
};

const FollowButton = ({ following, curUser, onFollow }: FollowButtonProps) => {
  const { user } = useUserLoged();
  const [hasUserFollow, setHasUserFollow] = useState(
    user && following.includes(user?._id)
  );

  useEffect(() => {
    if (user && following.includes(user?._id)) {
      setHasUserFollow(true);
    } else {
      setHasUserFollow(false);
    }
  }, [user, following, curUser]);

  return (
    <>
      {user && (
        <button
          onClick={() => {
            onFollow(curUser._id);
            setHasUserFollow(!hasUserFollow);
          }}
        >
          {user && hasUserFollow ? "Unfollow" : "Follow"}
        </button>
      )}
    </>
  );
};

export default React.memo(FollowButton);
