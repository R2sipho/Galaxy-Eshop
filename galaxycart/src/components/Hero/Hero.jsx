import React from "react";
import Slider from "react-slick";

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats solo",
        title: "wireless",
        title2: "Headphone",
        description:"",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats solo",
        title: "wireless",
        title2: "Virtual",
        description:"",
    },
    {
        id: 3,
        img: Image1,
        subtitle: "Beats solo",
        title: "wireless",
        title2: "Headphone",
        description:"",
    },
]

const Hero =() => {
    const settings = {
        dots: false,
        arrows: false,
        Infinity: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
    <div>
        <div className="w-full">
            {/**Hero Section */}
            <Slider {...settings} > 
           
            </Slider>
        </div>
    </div>
    );
};

export default Hero;