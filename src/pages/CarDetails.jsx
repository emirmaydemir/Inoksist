import React, { useState, useEffect } from "react";
import fastenerData from "../assets/data/fastenerData";
import hardwareData from "../assets/data/hardwareData";
import chemicalData from "../assets/data/chemicalData";
import waterData from "../assets/data/waterData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import "../styles/car-details.css"; // Özel stilleri eklemek için bir CSS dosyası

const CarDetails = () => {
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

  const singleCarItem = data.find((item) => item.name === slug);

  const [mainImage, setMainImage] = useState(singleCarItem.images[0]);

  useEffect(() => {
    setMainImage(singleCarItem.images[0]);
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  const handleImageClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  return (
    <Helmet title={singleCarItem.name}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="d-flex flex-column align-items-center">
              {/* Ana resim */}
              <img
                src={mainImage}
                alt="Main Car"
                className="w-100 main-image"
              />
              {/* Küçük kartlar */}
              <div className="thumbnail-container mt-3 d-flex justify-content-center">
                {singleCarItem.images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Thumbnail ${index}`}
                    className="img-thumbnail custom-thumbnail"
                    onClick={() => handleImageClick(imgUrl)}
                  />
                ))}
              </div>
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.name}</h2>
                <p className="section__description">
                  {singleCarItem.description}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
