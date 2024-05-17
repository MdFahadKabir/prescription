import React from "react";
import Slider from "../common/Slider";
import offer1 from "../../../public/images/offer1.png";
import offer2 from "../../../public/images/offer2.png";

const slides = [
  { id: 1, image: offer2 },
  { id: 2, image: offer1 },
];
const OfferSecond = () => {
  return (
    <>
      <Slider>
        {slides.map((slide) => (
          <div key={slide.id} className="swiper-slide">
            <img
              src={slide.image}
              alt={`Offer ${slide.id}`}
              className="w-[213px] h-[185px]"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default OfferSecond;
