import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import productImage1 from "../../assets/all-images/Fastener/1.jpg";
import productImage2 from "../../assets/all-images/Fastener/2.jpg";
import productImage3 from "../../assets/all-images/Fastener/11.jpg";
import productImage4 from "../../assets/all-images/Fastener/7.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
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
      <div className="product-slide py-4 px-3">
        <div className="product-image mb-3">
          <img src={productImage1} alt="Product 1" className="img-fluid" />
        </div>
        <h5 className="product-title mb-2">DIN 933 Altı Köşe Cıvata A2</h5>
        <p className="product-description">
          Kısa açıklama metni buraya gelecek. Ürünün en önemli özelliklerini
          özetleyeceğiz.
        </p>
      </div>

      <div className="product-slide py-4 px-3">
        <div className="product-image mb-3">
          <img src={productImage2} alt="Product 2" className="img-fluid" />
        </div>
        <h5 className="product-title mb-2">DIN/ISO 7380 Bombe Başlı İmb. A2</h5>
        <p className="product-description">
          Kısa açıklama metni buraya gelecek. Ürünün en önemli özelliklerini
          özetleyeceğiz.
        </p>
      </div>

      <div className="product-slide py-4 px-3">
        <div className="product-image mb-3">
          <img src={productImage3} alt="Product 3" className="img-fluid" />
        </div>
        <h5 className="product-title mb-2">DIN 916 Setiskur Cıvata A2</h5>
        <p className="product-description">
          Kısa açıklama metni buraya gelecek. Ürünün en önemli özelliklerini
          özetleyeceğiz.
        </p>
      </div>

      <div className="product-slide py-4 px-3">
        <div className="product-image mb-3">
          <img src={productImage4} alt="Product 4" className="img-fluid" />
        </div>
        <h5 className="product-title mb-2">DIN 976 Gijon A2</h5>
        <p className="product-description">
          Kısa açıklama metni buraya gelecek. Ürünün en önemli özelliklerini
          özetleyeceğiz.
        </p>
      </div>
    </Slider>
  );
};

export default Testimonial;
