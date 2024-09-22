import React from "react";
import "../../styles/become-motivation.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/civata2.jpg";
import { useTranslation } from "react-i18next";

const TrendyolSection = () => {
  const { t } = useTranslation("motivation");
  const motivationData = t("trendyolSection", { returnObjects: true });

  const handleClick = () => {
    window.open("https://www.trendyol.com/inoksist", "_blank");
  };

  return (
    <section className="become__motivation">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__motivation-img">
            <img src={driverImg} alt="" className="w-100" loading="lazy" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__motivation-title">
              {motivationData.title}
            </h2>

            <button
              className="btn become__motivation-btn mt-4"
              onClick={handleClick}
            >
              {motivationData.buttonText}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrendyolSection;
