import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

const SlickSlider = (props) => {
    var settings = {
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoPlaySpeen: 2000
                }
            },

        ]
    };
    return (
        <Slider {...settings}>
            {props.childern}
        </Slider>
    );
}

export default SlickSlider;