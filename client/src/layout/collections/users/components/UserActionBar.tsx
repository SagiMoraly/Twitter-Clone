import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUserLoged } from "../providers/UserProvider";
import UserDeleteDialog from "./UserDeleteDialog";
import { useNavigate } from "react-router-dom";
// import { likePost } from "../../services/postApiService";

type UserActionBarProps = {
  userId: string;
  onDelete: (id: string) => void;
};

const UserActionBar = ({ userId, onDelete }: UserActionBarProps) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { user } = useUserLoged();
  const navigate = useNavigate();

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteUser = () => {
    handleDialog();
    onDelete(userId);
  };

  return (
    <>
      <IconButton aria-label="delete post" onClick={() => handleDialog("open")}>
        <DeleteIcon />
        Delete user
      </IconButton>
      <UserDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteUser}
      />
    </>
  );
};

export default React.memo(UserActionBar);
