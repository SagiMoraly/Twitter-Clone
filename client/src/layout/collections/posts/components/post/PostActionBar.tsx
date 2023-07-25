import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUserLoged } from "../../../users/providers/UserProvider";
import PostDeleteDialog from "./PostDeleteDialog";
import { useNavigate } from "react-router-dom";
import { likePost } from "../../services/postApiService";

type PostActionBarProps = {
  likes: string[];
  postId: string;
  author: string;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const PostActionBar = ({
  likes,
  postId,
  author,
  onDelete,
  onLike,
}: PostActionBarProps) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { user } = useUserLoged();
  const [hasUserLiked, setHasUserLiked] = useState(
    user && likes?.includes(user?._id)
  );
  const [numberOfLikes, setNumberOfLikes] = useState(likes.length);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && likes?.includes(user?._id)) {
      setHasUserLiked(true);
    } else {
      setHasUserLiked(false);
    }
  }, [user, likes, author]);

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeletePost = () => {
    handleDialog();
    onDelete(postId);
  };

  // const addOrRemove = async () => {
  //   let resultsOfLike = false;
  //   if (user) {
  //     if (hasUserLiked) {
  //       resultsOfLike = await removeFavPost(postId, user?._id);
  //     } else {
  //       resultsOfLike = await addFavPost(postId, user?._id);
  //     }
  //     resultsOfLike && setHasUserLiked(!hasUserLiked);
  //     onLike();
  //   }
  // };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user._id === author || user.isAdmin) && (
            <IconButton
              aria-label="delete post"
              onClick={() => handleDialog("open")}
            >
              <DeleteIcon />
            </IconButton>
          )}

          {user?._id === author && (
            <IconButton
              aria-label="edit post"
              onClick={() => navigate(`${"/edit"}/${postId}`)}
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton
            aria-label="comment"
            onClick={() => navigate(`${"/post"}/${postId}`)}
          >
            <ModeCommentIcon />
          </IconButton>

          {user && (
            <>
              <span>{numberOfLikes}</span>
              <IconButton
                aria-label="likes"
                onClick={() => {
                  likePost(postId);
                  hasUserLiked
                    ? setNumberOfLikes(numberOfLikes - 1)
                    : setNumberOfLikes(numberOfLikes + 1);
                  setHasUserLiked(!hasUserLiked);
                }}
              >
                {hasUserLiked ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteIcon />
                )}
              </IconButton>
            </>
          )}
        </Box>
      </CardActions>
      <PostDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeletePost}
      />
    </>
  );
};

export default React.memo(PostActionBar);
