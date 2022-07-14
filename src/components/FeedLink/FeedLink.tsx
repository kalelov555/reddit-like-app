import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import NextLink from "next/link";
import { FeedLink as LinkType } from "typings/feedLink";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box } from "@mui/material";
import { SimpleDialog } from "components/Dialog/Dialog";

export const FeedLink = ({ description, url, postedBy, votes }: LinkType) => {
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
            <NextLink href={url}>{description}</NextLink>
          </Typography>
          <Box sx={{ m: 1.5 }}>
            <Button variant='contained' size='small' onClick={handleClose}>
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
