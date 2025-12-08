import React, { useContext, useEffect, useState } from "react";
import { DataContexts } from "../context/dataContexts";
import Slider from "react-slick";

// // Slick CSS (YOUR COMMENTED CODE SHOULD BE ENABLED)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TOTAL_DOTS = 7; // ⭐ Fixed number of dots

const CarouselSlick = () => {
  const { data, fetchAllProducts } = useContext(DataContexts);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const settings = {
    dots: false, // ⭐ disable slick dots
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,

    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // ⭐ Track slide change
    },

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // ⭐ MOD: Active dot index (cycles 0–6)
  const activeDot = currentSlide % TOTAL_DOTS;

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
              text-white rounded-md
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

      {/* ⭐ CUSTOM 7 DOTS */}
      <div className="flex justify-center gap-3 mt-5">
        {[...Array(TOTAL_DOTS)].map((_, i) => (
          <div
            key={i}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 
              ${activeDot === i ? "bg-red-500 scale-125" : "bg-gray-500"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlick;
