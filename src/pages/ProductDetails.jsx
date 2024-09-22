import React, { useState, useEffect } from "react";
import fastenerData from "../assets/data/fastenerData";
import hardwareData from "../assets/data/hardwareData";
import chemicalData from "../assets/data/chemicalData";
import waterData from "../assets/data/waterData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import "../styles/product-details.css"; // Özel stilleri eklemek için bir CSS dosyası

//ÜRÜN DETAY SAYFASI
const ProductDetails = () => {
  const { category, slug } = useParams();

  const getDataByCategory = (category) => {
    switch (category) {
      case "fastenerData":
        return fastenerData;
      case "hardwareData":
        return hardwareData;
      case "chemicalData":
        return chemicalData;
      case "waterData":
        return waterData;
      default:
        return [];
    }
  };

  const data = getDataByCategory(category);

  const singleProductItem = data.find((item) => item.name === slug);

  const [mainImage, setMainImage] = useState(singleProductItem.images[0]);

  useEffect(() => {
    setMainImage(singleProductItem.images[0]);
    window.scrollTo(0, 0);
  }, [singleProductItem]);

  const handleImageClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  return (
    <Helmet title={singleProductItem.name}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="d-flex flex-column align-items-center">
              {/* Ana resim */}
              <img
                src={mainImage}
                alt="Main Product"
                className="w-100 main-image"
                loading="lazy"
              />
              {/* Küçük kartlar */}
              <div className="thumbnail-container mt-3 d-flex justify-content-center">
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
            {/* Teknik Çizimler */}
            {singleProductItem.technicalDrawings?.length > 0 && (
              <Row className="mt-5">
                <Col lg="12">
                  <div className="section-container">
                    <div className="technical-drawings d-flex flex-wrap justify-content-center">
                      {singleProductItem.technicalDrawings.map(
                        (drawing, index) => (
                          <div key={index} className="drawing-container m-2">
                            <img
                              src={drawing}
                              alt={`Technical Drawing ${index + 1}`}
                              className="technical-drawing"
                              loading="lazy"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            )}

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
