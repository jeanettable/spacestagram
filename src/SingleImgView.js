import React, { useState, useEffect } from 'react';

const SingleImgView = (props) => {
    const { image } = props;
    console.log('image>>>', image);

    const [ liked, setLike ] = useState(false);

    const toggleLikeStatus = () => {
        setLike(!setLike);
    }

        return(
            <>
                <div className="img-container" >
                    <img src={image.hdurl} alt={`${image.title}: ${image.explanation}`}/>
                </div>
                <div className="img-info-display" >
                    <h3>{image.title}</h3>
                    <p>{image.explanation}</p>
                </div>
                <div className="like-interaction" > 
                {liked ? (
                    <button 
                    className="like-btn-on" 
                    type="button"
                    onClick={toggleLikeStatus} >
                        Like
                        {/* heart icon placeholder, will toggle class */}
                    </button>
                ) : (
                    <button 
                    className="like-btn-off" 
                    type="button"
                    onClick={toggleLikeStatus} >
                        Like
                        {/* heart icon placeholder, will toggle class */}
                    </button>   
                )}
                    
                </div>
            </ >
        )
    }

export default SingleImgView;