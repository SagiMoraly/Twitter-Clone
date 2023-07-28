import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
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
        <Button
          sx={{ backgroundColor: "#1DA1F2", borderRadius: "16px" }}
          variant="contained"
          onClick={() => {
            onFollow(curUser._id);
            setHasUserFollow(!hasUserFollow);
          }}
        >
          {user && hasUserFollow ? "Unfollow" : "Follow"}
        </Button>
      )}
    </>
  );
};

export default React.memo(FollowButton);
