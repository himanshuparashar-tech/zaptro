import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../context/DataContext";
import "../swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);

  // ⭐ Refs for custom arrows
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="relative">

      {/* ⭐ Custom Prev Arrow */}
      <button
        ref={prevRef}
        className="
          absolute left-2 top-[50%] z-50
          -translate-y-1/2 
          bg-white/20 backdrop-blur-md
          text-white border border-white/20
          w-12 h-12 rounded-full 
          flex justify-center items-center
          hover:bg-white hover:text-black transition
        "
      >
        ❮
      </button>

      {/* ⭐ Custom Next Arrow */}
      <button
        ref={nextRef}
        className="
          absolute right-2 top-[50%] z-50
          -translate-y-1/2
          bg-white/20 backdrop-blur-md
          text-white border border-white/20
          w-12 h-12 rounded-full 
          flex justify-center items-center
          hover:bg-white hover:text-black transition
        "
      >
        ❯
      </button>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ height: "auto" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}

        // ⭐ Custom Navigation (Important)
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        // ⭐ Fix Swiper not detecting refs
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}

        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 1, spaceBetween: 30 },
          1280: { slidesPerView: 1, spaceBetween: 40 },
        }}
      >
        {data?.slice(0, 7)?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="
              bg-gradient-to-r 
              from-[color:#0f0c29] 
              via-[color:#302b63] 
              to-[color:#24243e] 
              text-white
            "
          >
            <div
              className="
                flex flex-col md:flex-row
                items-center justify-center 
                gap-10 
                h-auto md:h-[600px]
                px-6 py-10 md:px-12
                lg:max-w-[90%]
                m-auto
              "
            >
              {/* LEFT TEXT */}
              <div className="space-y-6 md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-red-500 font-semibold text-sm uppercase">
                  {item.slug}
                </h3>
                <h1 className="text-3xl md:text-5xl font-bold uppercase line-clamp-3">
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
                    object-cover rounded-full
                    hover:scale-105 transition-all
                    shadow-2xl shadow-red-500/30
                  "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
