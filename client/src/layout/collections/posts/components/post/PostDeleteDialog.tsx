import React, { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  isDialogOpen: boolean;
  onDelete: () => void;
  onChangeDialog: (term?: string) => void;
};

const PostDeleteDialog: FC<Props> = ({
  isDialogOpen,
  onDelete,
  onChangeDialog,
}) => {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => onChangeDialog()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this post?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This operation will completely delete the business post and all its
          data from the database and it will not be possible to retrieve the
          post afterwards
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onChangeDialog()} color="error">
          cancel
        </Button>
        <Button onClick={onDelete} autoFocus color="info">
          Delete post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostDeleteDialog;
