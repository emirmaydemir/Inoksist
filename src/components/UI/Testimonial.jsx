import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";
import productImage1 from "../../assets/all-images/Fastener/1.jpg";
import productImage2 from "../../assets/all-images/Fastener/2.jpg";
import productImage3 from "../../assets/all-images/Fastener/11.jpg";
import productImage4 from "../../assets/all-images/Fastener/7.jpg";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation("testimonial");
  const testimonialData = t("testimonials", { returnObjects: true });
  const images = [productImage1, productImage2, productImage3, productImage4];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    draggable: true, // Fare ile sürüklenebilirlik
    touchMove: true, // Dokunmatik hareketlere izin ver
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialData.map((item, index) => (
        <div key={item.id} className="product-slide py-4 px-3">
          <div className="product-image mb-3">
            <img
              src={images[index]}
              alt={`Product ${item.id}`}
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <h5 className="product-title mb-2">{item.title}</h5>
          <p className="product-description">{item.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
