import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// import "./styles.css";

const Slider = ({ children }) => {
  return (
    <Swiper
      className="mySwiper"
      autoplay={{ delay: 3000 }} // Auto play with a delay of 3 seconds
      loop={true} // Enable loop
      modules={[Autoplay]}
    >
      {children.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
