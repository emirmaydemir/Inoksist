import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const { t } = useTranslation("slider");
  const sliderContent = t("homeSlider", { returnObjects: true });
  const settings = {
    fade: true,
    speed: 1800,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      {sliderContent.map((slide, index) => (
        <div
          key={index}
          className={`slider__item slider__item-0${index + 1} mt0`}
        >
          <Container>
            <div className="slider__content ">
              <h4 className="text-light mb-3">{slide.title}</h4>
              <h1 className="text-light mb-4">{slide.heading}</h1>
              <button className="btn reserve__btn mt-4">
                <Link to={slide.link} aria-label="İletişim sayfasına git">
                  {slide.buttonText}
                </Link>
              </button>
            </div>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
