import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  makeStyles,
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardRoot: {
    display: "flex",
    padding: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: 200,
    width: 200,
  },
  media: {
    width: "60vh",
    height: "60vh",
  },
}));

const SingleImgView = (props) => {
  const classes = useStyles();
  const { image } = props;

  const [liked, setLike] = useState(false);

  const toggleLikeStatus = () => {
    setLike(!liked);
    console.log("status of liked: ", liked);
  };

  return (
    <Container maxWidth="md" className={classes.cardRoot}>
      <Card>
        <CardMedia className={classes.media} image={image.hdurl}></CardMedia>
        <Box className={classes.details}>
          <CardContent className={classes.content}>
            <h3>{image.title}</h3>
            {/* <p>{image.explanation}</p> */}
          </CardContent>
        </Box>
        <div className="like-interaction">
          {liked ? (
            <IconButton color="secondary" onClick={() => toggleLikeStatus()}>
              <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
          ) : (
            <IconButton color="primary" onClick={() => toggleLikeStatus()}>
              <FavoriteBorderIcon fontSize="large"></FavoriteBorderIcon>
            </IconButton>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default SingleImgView;
