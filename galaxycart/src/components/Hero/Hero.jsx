import React from "react";
import Slider from "react-slick";
import Headphone from "../../assets/hero/headphone.png";
import Watch from "../../assets/hero/watch.png"; 
import Macbook from "../../assets/category/macbook.png"; 
import Button from '../Shared/Button';


const HeroData = [
    {
        id: 1,
        img: Headphone,
        subtitle: "Beats solo",
        title: "wireless",
        title2: "Headphone",
        description:"",
    },
    {
        id: 2,
        img: Watch,
        subtitle: "Beats solo",
        title: "Watch",
        title2: "Virtual",
        description:"",
    },
    {
        id: 3,
        img: Macbook,
        subtitle: "Beats solo",
        title: "Watch",
        title2: "Virtual",
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
        <div className="container">
          <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
            <div className="container pb-8 sm:pb-0">
              {/* Hero Section */}
              <Slider {...settings}>
                {HeroData.map((data) => (
                  <div key={data.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {/* Text content section */}
                      <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                        <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
                        <div>
                        <Button 
                           text="Shop Now" 
                           bgColor="bg-primary" 
                           textColor="text-white"   
                        />
                           
                          
                        </div>
                      </div>
                      {/* Image section */}
                      <div className="order-1 sm:order-2">
                        <div>
                          <img
                            src={data.img}
                            alt=""
                            className="w-[300px] sm:w-[450] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      );
    };
export default Hero;