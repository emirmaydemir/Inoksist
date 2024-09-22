import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/civata3.jpg";
import { useTranslation } from "react-i18next";

const AboutSection = ({ aboutClass }) => {
  const { t } = useTranslation("about");
  const aboutContent = t("aboutSection", { returnObjects: true });
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">{aboutContent.subtitle}</h4>
              <h2 className="section__title">{aboutContent.title}</h2>
              <p className="section__description">{aboutContent.description}</p>

              <Row className="mb-2">
                {" "}
                {/* İlk iki öğe */}
                <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>{" "}
                      {aboutContent.items[0]}
                    </p>
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>{" "}
                      {aboutContent.items[1]}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                {" "}
                {/* Son iki öğe */}
                <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>{" "}
                      {aboutContent.items[2]}
                    </p>
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>{" "}
                      {aboutContent.items[3]}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" loading="lazy" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
