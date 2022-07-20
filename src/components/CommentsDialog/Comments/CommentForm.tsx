import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styles from "./Comments.module.css";

export type Props = {
  submitLabel: string;
  handleSubmit: (text: string, parentId?: string) => void;
  setIsReplaying?: Dispatch<SetStateAction<Boolean>>;
  replyId?: string;
};

export const CommentForm = ({
  submitLabel,
  handleSubmit,
  setIsReplaying,
  replyId,
}: Props) => {
  const [text, setText] = useState("");

  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    handleSubmit(text, replyId);
    event.preventDefault();
    setText("");
    setIsReplaying && setIsReplaying(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className={styles.commentFormTextarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={styles.commentFormButton}
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </button>
    </form>
  );
};
