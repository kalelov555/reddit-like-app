import * as React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  DialogTitle,
  Dialog,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import type { Vote } from "typings/post";

export interface SimpleDialogProps {
  open: boolean;
  votes: Vote[];
  onClose: () => void;
  description: string;
}

export const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, votes, open, description } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Users who upvoted post:{description}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {votes.map((vote) => (
          <ListItem key={vote.id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                vote.user?.name.charAt(0).toUpperCase() +
                vote.user?.name.slice(1)
              }
            />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
