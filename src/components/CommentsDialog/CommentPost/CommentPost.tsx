import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export type Props = {
  postDescription: string;
};

export const CommentPost = ({ postDescription }: Props) => {
  return (
    <Card>
      <CardMedia
        component='img'
        height='140'
        image='https://source.unsplash.com/random/900×700/?city,night,beach'
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {postDescription}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};
