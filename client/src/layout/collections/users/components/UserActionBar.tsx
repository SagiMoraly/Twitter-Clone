import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUserLoged } from "../providers/UserProvider";
import UserDeleteDialog from "./UserDeleteDialog";
import { useNavigate } from "react-router-dom";

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
