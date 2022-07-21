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
import { VotesDialog } from "components/VotesDialog/VotesDialog";
import { Post } from "typings/post";
import { CommentsDialog } from "components/CommentsDialog/CommentsDialog";
import { ApolloError, useMutation } from "@apollo/client";
import { UPVOTE_POST } from "mutations/votes";
import { GET_ALL_POSTS } from "query/posts";
import { notifyError, notifySuccess } from "utils/notifications";
import Cookies from "js-cookie";

export const FeedPost = ({ id, description, url, postedBy, votes }: Post) => {
  const [upvotePost] = useMutation(UPVOTE_POST, {
    onCompleted: () => {
      notifySuccess("Successfully voted");
    },
    onError: (err: ApolloError) => {
      notifyError("Error", err.message);
    },
  });
  const [openVotes, setOpenVotes] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  const handleCommentsOpen = () => {
    setOpenComments(true);
  };
  const handleCommentsClose = () => {
    setOpenComments(false);
  };
  const handleVotesOpen = () => {
    setOpenVotes(true);
  };
  const handleVotesClose = () => {
    setOpenVotes(false);
  };

  return (
    <Card variant='outlined' sx={{ my: 1 }}>
      <React.Fragment>
        <CardContent onClick={handleVotesOpen}>
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
                Cookies.get("token")
                  ? upvotePost({
                      variables: {
                        linkId: id,
                      },
                      refetchQueries: () => [{ query: GET_ALL_POSTS }],
                    })
                  : notifyError("Error", "You have to login first");
              }}
            >
              <ArrowUpwardIcon /> upvote
            </Button>

            <AvatarGroup total={votes?.length} max={4}>
              {votes.map((vote) => (
                <Avatar key={vote.id} alt={vote.user.name} />
              ))}
            </AvatarGroup>

            <Box sx={{ mt: 2, borderTop: "1px solid black" }}>
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  handleCommentsOpen();
                }}
              >
                comments
              </Button>
            </Box>
          </Box>
        </CardContent>
      </React.Fragment>

      {/* Modal for Votes */}
      <VotesDialog
        votes={votes}
        openVotes={openVotes}
        onVotesClose={handleVotesClose}
        description={description}
      />

      {/* Modal for Comments */}
      <CommentsDialog
        openComments={openComments}
        onCloseComments={handleCommentsClose}
        postId={id}
        postDescription={description}
      />
    </Card>
  );
};
