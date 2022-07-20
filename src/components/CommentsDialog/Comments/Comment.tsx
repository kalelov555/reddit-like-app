import { Box } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import type { Post } from "typings/post";
import { CommentForm } from "./CommentForm";
import styles from "./Comments.module.css";

export type Props = {
  comment: Post;
  getReplies: (commentId: string) => Post[];
  activeComment: string;
  setActiveComment: Dispatch<SetStateAction<string>>;
  createReply: (text: string, parentId?: string) => void;
};

export const Comment = ({
  comment,
  getReplies,
  activeComment,
  setActiveComment,
  createReply,
}: Props) => {
  const [isReplaying, setIsReplaying] = useState<Boolean>(false);

  const text = comment.description.split("   ")[1];

  const replies = getReplies(comment.id);

  return (
    <Box className={styles.comment}>
      <Box className={styles.commentImageContainer}>
        <Image src='/user-icon.png' alt='' width={40} height={40} />
      </Box>

      <Box className={styles.commentRightPart}>
        <div className={styles.commentContent}>
          <div className={styles.commentAuthor}>{comment.postedBy.name}</div>
        </div>
        <div className={styles.commentText}>{text}</div>
        <div className={styles.commentActions}>
          <div
            className={styles.commentAction}
            onClick={() => {
              setIsReplaying(true);
              setActiveComment(comment.id);
            }}
          >
            Reply
          </div>
        </div>

        {isReplaying && (
          <CommentForm
            submitLabel='Reply'
            handleSubmit={createReply}
            setIsReplaying={setIsReplaying}
            replyId={comment.id}
          />
        )}

        {replies.length > 0 && (
          <div className={styles.replies}>
            {replies.map((reply) => {
              return (
                <Comment
                  comment={reply}
                  key={reply.id}
                  getReplies={getReplies}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  createReply={createReply}
                />
              );
            })}
          </div>
        )}
      </Box>
    </Box>
  );
};
