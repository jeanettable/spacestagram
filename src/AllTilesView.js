import React, { useState, useEffect } from 'react';
import SingleImgView from './SingleImgView';
import {
    makeStyles,
    Grid,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    rootCol: {
      display: "flex",
      flex: "1 0 auto",
      padding: 10,
    },
  }));

const AllTiles = (props) =>  {
    const classes = useStyles();
    const { getImages, baseURL } = props;
    const [ images, setImages ] = useState([]);
        // for use with datepicker?
        // this.handleChange = this.handleChange.bind(this);


    useEffect(async () => {
        const imgData = await getImages(baseURL);
        console.log('imgData>>>', imgData);
        setImages(imgData);
    }, [baseURL, getImages] )

      return (
          <div className="images-container">
              <Grid container className={classes.rootCol} direction="column" alignItems="center" >
              {images.length ? (
                images.map((image, idx) => (
                    <div key={idx} className="list-img-card">
                        <SingleImgView image={image} />
              </div>
            ))  
          ) : ( 
            <h1>Please wait, retrieving signal from Space...</h1>
          )}
              </Grid>
          </div>
      )
}

export default AllTiles;
