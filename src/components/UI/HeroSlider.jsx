import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Kalite bizim işimiz.</h4>
            <h1 className="text-light mb-4">Endüstriyel çözümler sunuyoruz.</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">İletişime Geç</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Kalite bizim işimiz.</h4>
            <h1 className="text-light mb-4">
              Kaliteli bağlantı elemanları üretiyoruz.
            </h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">İletişime Geç</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Kalite bizim işimiz.</h4>
            <h1 className="text-light mb-4">
              Teknik hırdavat ve ekipman sağlıyoruz.
            </h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">İletişime Geç</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-04 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Kalite bizim işimiz.</h4>
            <h1 className="text-light mb-4">
              Bakım kimyasalları ile destekliyoruz.
            </h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">İletişime Geç</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-05 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Kalite bizim işimiz.</h4>
            <h1 className="text-light mb-4">
              Modüler su depoları tasarlıyoruz.
            </h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">İletişime Geç</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-06 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Kalite bizim işimiz.</h4>
            <h1 className="text-light mb-4">
              Güvenilir ürünlerle hizmet veriyoruz.
            </h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">İletişime Geç</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-07 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Kalite bizim işimiz.</h4>
            <h1 className="text-light mb-4">
              Sektördeki ihtiyaçlarınıza cevap veriyoruz.
            </h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">İletişime Geç</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
