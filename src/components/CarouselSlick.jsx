import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import Slider from "react-slick";

// Slick required CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CarouselSlick = () => {
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,

    // ⭐ Slick responsive config
    responsive: [
      {
        breakpoint: 1024, // laptop
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="p-4 lg:max-w-[95%] mx-auto">
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div
            key={index}
            className="
              bg-gradient-to-r 
              from-[color:#0f0c29] 
              via-[color:#302b63] 
              to-[color:#24243e] 
              text-white
              rounded-md
            "
          >
            <div
              className="
                flex flex-col md:flex-row
                items-center justify-center 
                gap-10 
                h-auto md:h-[600px]
                px-6 py-10 md:px-12
              "
            >
              {/* LEFT TEXT */}
              <div className="space-y-6 md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                  {item.slug}
                </h3>

                <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight line-clamp-3">
                  {item.title}
                </h1>

                <p className="text-gray-300 line-clamp-3 md:w-[90%] mx-auto md:mx-0">
                  {item.description}
                </p>

                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-5 py-3 rounded-md cursor-pointer mt-4 w-fit mx-auto md:mx-0">
                  Shop Now
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="md:w-1/2 w-full flex justify-center">
                <img
                  src={item?.images?.[0]}
                  alt={item.title}
                  className="
                    w-[250px] h-[250px] 
                    sm:w-[300px] sm:h-[300px] 
                    md:w-[450px] md:h-[450px]
                    object-cover
                    rounded-full
                    hover:scale-105 transition-all 
                    shadow-2xl shadow-red-500/30
                  "
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlick;