import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type Props = {
  onCloseComments: () => void;
};

export const CommentsBar = ({ onCloseComments }: Props) => {
  return (
    <AppBar sx={{ position: "relative" }}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          onClick={onCloseComments}
          aria-label='close'
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
          Post
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
