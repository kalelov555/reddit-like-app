import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Avatar,
  AvatarGroup,
  Box,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { SimpleDialog } from "components/Dialog/Dialog";
import { Post } from "typings/post";

export const FeedPost = ({ description, url, postedBy, votes }: Post) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant='outlined'>
      <React.Fragment>
        <CardContent onClick={handleClickOpen}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            color='text.secondary'
          >
            <Avatar alt='Remy Sharp' sx={{ width: 30, height: 30 }} />
            <Typography sx={{ fontSize: 15, px: 0.5, py: 1 }}>
              {postedBy.name}
            </Typography>
          </Box>

          <Typography variant='h5' component='div'>
            <a
              target='_blank'
              href={`https://${url}`}
              onClick={(event) => event.stopPropagation()}
              rel='noreferrer'
            >
              {description}
            </a>
          </Typography>
          <Box sx={{ m: 1.5 }}>
            <Button
              variant='contained'
              size='small'
              onClick={(event) => {
                event.stopPropagation();
                alert("123");
              }}
            >
              <ArrowUpwardIcon /> upvote
            </Button>
            <AvatarGroup total={votes?.length} max={4}>
              {votes.map((vote) => (
                <Avatar key={vote.id} alt={vote.user.name} />
              ))}
            </AvatarGroup>
          </Box>
        </CardContent>
      </React.Fragment>

      <SimpleDialog
        votes={votes}
        open={open}
        onClose={handleClose}
        description={description}
      />
    </Card>
  );
};
