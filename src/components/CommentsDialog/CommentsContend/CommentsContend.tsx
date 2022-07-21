import { useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import { CREATE_COMMENT_MUTATION } from "mutations/comments";
import { useState } from "react";
import { Post } from "typings/post";
import { Comments } from "../Comments/Comments";
import { CommentPost } from "../CommentPost/CommentPost";
import { GET_ALL_COMMENTS } from "query/comments";

export type Props = {
  comments: Post[];
  postId: string;
  postDescription: string;
};

export const CommentsContend = ({
  comments,
  postId,
  postDescription,
}: Props) => {
  const [createCommentApi] = useMutation(CREATE_COMMENT_MUTATION, {
    refetchQueries: [GET_ALL_COMMENTS],
  });

  const [activeComment, setActiveComment] = useState("");

  const rootComments = comments.filter(
    (comment: Post) => comment.url.split(" ")[1] === "null"
  );

  const getReplies = (commentId: string) => {
    return comments.filter(
      (comment) => comment.url.split(" ")[1] === commentId
    );
  };

  const createComment = (text: string, parentId?: string) => {
    parentId === undefined
      ? createCommentApi({
          variables: {
            url: `${postId} null`,
            description: `#comment#   ${text}`,
          },
        })
      : createCommentApi({
          variables: {
            url: `${postId} ${parentId}`,
            description: `#comment#   ${text}`,
          },
        });
  };

  return (
    <Box style={{ padding: "3% 25%" }}>
      <CommentPost postDescription={postDescription} />
      <Comments
        rootComments={rootComments}
        getReplies={getReplies}
        activeComment={activeComment}
        setActiveComment={setActiveComment}
        createComment={createComment}
      />
    </Box>
  );
};
