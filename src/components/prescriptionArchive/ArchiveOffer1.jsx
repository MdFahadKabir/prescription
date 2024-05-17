import React from "react";
import Slider from "../common/Slider";
import offer1 from "../../../public/images/offer1.png";
import offer2 from "../../../public/images/offer2.png";
const ArchiveOffer1 = () => {
  const slides = [
    { id: 1, image: offer1 },
    { id: 2, image: offer2 },
  ];
  return (
    <>
      <Slider>
        {slides.map((slide) => (
          <div key={slide.id} className="swiper-slide">
            <img
              src={slide.image}
              alt={`Offer ${slide.id}`}
              className="w-[303px] h-[165px]"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ArchiveOffer1;
