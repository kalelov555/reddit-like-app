import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import { Vote } from "typings/feedLink";

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
