import * as React from "react";
import { useState, useEffect } from "react";
import { Dialog, Slide, Skeleton } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { CommentsBar } from "./CommentsBar/CommentsBar";
import { CommentsContend } from "./CommentsContend/CommentsContend";
import { Post } from "typings/post";
import { useQuery } from "@apollo/client";
import { GET_ALL_COMMENTS } from "query/comments";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export type Props = {
  postId: string;
  openComments: boolean;
  onCloseComments: () => void;
  postDescription: string;
};

export const CommentsDialog = ({
  postId,
  openComments,
  onCloseComments,
  postDescription,
}: Props) => {
  const [comments, setComments] = useState<Post[]>([]);
  const { data, error, loading, refetch } = useQuery(GET_ALL_COMMENTS, {
    variables: { filter: "#comment#   " },
  });

  useEffect(() => {
    if (data) {
      const newComments = data.feed.links.filter(
        (post: Post) => post.url.split(" ")[0] === postId
      );
      setComments(newComments);
    }
  }, [data, setComments, postId]);

  if (loading) {
    return <Skeleton animation='wave' />;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <Dialog
      fullScreen
      open={openComments}
      onClose={onCloseComments}
      TransitionComponent={Transition}
    >
      <CommentsBar onCloseComments={onCloseComments} />

      <CommentsContend
        comments={comments}
        postId={postId}
        postDescription={postDescription}
        refetch={refetch}
        data={data}
      />
    </Dialog>
  );
};
