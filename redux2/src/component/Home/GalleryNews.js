import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const showGallery  = ({galData}) => {
    if(galData){
        return(
            <Slider {...settings}>
                {galData.map((item) => {
                    return(
                        <Link to="/" className="slider-item">
                            <div className="image"
                            style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
}

const GalleryNews = (props) => {
    return(
        <div className="home-gallery">
            <h2>Gallery News</h2>
            {showGallery(props)}
        </div>
    )
}

export default GalleryNews