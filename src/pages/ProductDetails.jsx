import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import "../styles/product-details.css"; // Özel stilleri eklemek için bir CSS dosyası
import { useTranslation } from "react-i18next";

//ÜRÜN DETAY SAYFASI
const ProductDetails = () => {
  const { category, slug } = useParams();
  const { t } = useTranslation(category);
  const data = t(category, { returnObjects: true });

  const singleProductItem = data.find((item) => item.name === slug);

  const [mainImage, setMainImage] = useState(singleProductItem.images[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleProductItem]);

  const handleImageClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100; // Mouse'un yatay konumu
    const y = ((e.pageY - top) / height) * 100; // Mouse'un dikey konumu
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)", //  Resim 2 kat büyütülür (zoom yapılır).
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" }); // Zoom sıfırlanır (1 kat büyüklük, yani orijinal boyut). Resim tekrar normal boyutlarına döner.
  };

  return (
    <Helmet title={singleProductItem.name}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="d-flex flex-column align-items-center">
              {/* Ana resim */}
              <div
                className="main-image-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="main-image"
                  style={zoomStyle}
                  loading="lazy"
                />
              </div>
              {/* Küçük kartlar */}
              <div className="thumbnail-container mt-3 d-flex justify-content-center flex-wrap">
                {singleProductItem.images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Thumbnail ${index}`}
                    className="img-thumbnail custom-thumbnail"
                    onClick={() => handleImageClick(imgUrl)}
                    loading="lazy"
                  />
                ))}
              </div>
            </Col>

            <Col lg="6">
              <div className="product__info">
                <h2 className="section__title">{singleProductItem.name}</h2>
                <p className="section__description">
                  {singleProductItem.description}
                </p>
              </div>
            </Col>
          </Row>

          {/* Ürün Detayları */}
          <div className="product-details-container">
            {/* Teknik Özellikler Başlığı */}
            <Row className="mt-3">
              <Col lg="12">
                <div className="technical-features">
                  <h2 className="technical-features-title">
                    Teknik Özellikler
                  </h2>
                  <hr className="technical-features-line" />
                </div>
              </Col>
            </Row>

            {/* Ürün Tabloları */}
            {singleProductItem.specifications?.length > 0 && (
              <Row className="mt-5">
                <Col lg="12">
                  <div className="section-container2">
                    <h4 className="fw-bold"> {singleProductItem.name}</h4>
                    {singleProductItem.title2 && (
                      <h5 className="fw-light fst-italic ">
                        {singleProductItem.title2}
                      </h5>
                    )}
                    {singleProductItem.title3 && (
                      <h6 className="fw-normal">{singleProductItem.title3}</h6>
                    )}
                    {singleProductItem.specifications.map((spec, index) => (
                      <div key={index} className="specification-table mb-4">
                        {/* Title varsa göster, yoksa atla */}
                        {spec.title && (
                          <h4 className="table-title">{spec.title}</h4>
                        )}
                        <div className="table-responsive">
                          {" "}
                          {/* Bootstrap responsive tablo sınıfı */}
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                {spec.headers.map((header, idx) => (
                                  <th key={idx}>{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {spec.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
