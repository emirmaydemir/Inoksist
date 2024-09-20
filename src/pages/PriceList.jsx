import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import priceImg from "../assets/all-images/price.jpg";
import Helmet from "../components/Helmet/Helmet";

import "../styles/price-lists.css";

const PriceList = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <Helmet title="Fiyat Listeleri">
      <section className="price-details-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" md="12">
              <div className="price-details-card">
                <Row>
                  <Col md="6" className="image-col">
                    <img src={priceImg} alt="Price" className="img-fluid" />
                  </Col>
                  <Col md="6" className="content-col">
                    <h2 className="price-title">Fiyat Listeleri</h2>
                    <p className="price-description">
                      Güncel Fiyat için lütfen <strong>İLETİŞİME</strong>{" "}
                      geçiniz.
                    </p>
                    <Button
                      color="primary"
                      className="contact-button"
                      onClick={handleContactClick}
                    >
                      İletişime Geç
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PriceList;
