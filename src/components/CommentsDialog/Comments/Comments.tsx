import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import type { Post } from "typings/post";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import styles from "./Comments.module.css";

export type Props = {
  rootComments: Post[];
  getReplies: (commentId: string) => Post[];
  activeComment: string;
  setActiveComment: Dispatch<SetStateAction<string>>;
  createComment: (text: string, parentId?: string) => void;
};

export const Comments = ({
  rootComments,
  getReplies,
  activeComment,
  setActiveComment,
  createComment,
}: Props) => {
  return (
    <Box className={(styles.container, styles.comments)}>
      <Typography className={styles.commentsTitle}>Comments</Typography>

      <Box className={styles.commentFormTitle}>Write comment</Box>

      <CommentForm submitLabel='write' handleSubmit={createComment} />

      <Box className={styles.commentsContainer}>
        {rootComments.map((rootComment) => {
          return (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              getReplies={getReplies}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              createReply={createComment}
            />
          );
        })}
      </Box>
    </Box>
  );
};
