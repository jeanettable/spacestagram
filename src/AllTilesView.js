import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import SingleImgView from './SingleImgView';

const AllTiles = (props) =>  {
    const { getImages, baseURL } = props;
    const [ images, setImages ] = useState([]);
        // for use with datepicker?
        // this.handleChange = this.handleChange.bind(this);


    useEffect(async () => {
        const imgData = await getImages(baseURL);
        console.log('imgData>>>', imgData);
        setImages(imgData);
    }, [baseURL, getImages] )

    // componentDidMount() {
    //     const imgData = getImages(baseURL);
    //     this.setState({
    //       images: imgData
    //     });
    // }

      return (
          <div className="images-container">
              <div className="list-col" >
              {images.length ? (
                images.map((image, idx) => (
                    <div key={idx} className="list-img-card">
                        <SingleImgView image={image} />
                        {/* <Link to={`/${idx}`} >
                            <img src={image.hdurl} alt={`${image.title}: ${image.explanation}`}/>
                        </Link> */}
                {/* <button
                  className="delete-button"
                  type="button"
                  onClick={() => this.props.deleteRobot(robot.id)}
                >
                  X
                </button>  */}
              </div>
            ))  
          ) : ( 
            //   adjust so this can be seen!!!
            <h1>Please wait, retrieving signal from Space...</h1>
          )}
              </div>

          </div>
      )
}

export default AllTiles;
