import React, { useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import MotivationSection from "../components/UI/MotivationSection";

import bolt from "../assets/all-images/civata2.jpg";
import Testimonial from "../components/UI/Testimonial";
import "../styles/about.css";
import { useTranslation } from "react-i18next";

//HAKKIMIZDA
const About = () => {
  const { t } = useTranslation("aboutpage");
  const aboutContent = t("about", { returnObjects: true });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Boş dizi, sadece bileşen ilk render edildiğinde çalışmasını sağlar
  return (
    <Helmet title={aboutContent.title}>
      <CommonSection title={aboutContent.title} />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img
                  src={bolt}
                  alt="Hakkımızda"
                  className="w-100 rounded-3"
                  loading="lazy"
                />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">{aboutContent.sectionTitle}</h2>

                <p className="section__description">
                  {aboutContent.sectionDescription1}
                </p>

                <p className="section__description">
                  {aboutContent.sectionDescription2}
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">
                      {aboutContent.sectionSubtitle}
                    </h6>
                    <h4>
                      <a
                        href="tel:+902125497055"
                        className="contact__info-link"
                      >
                        +90 (212) 549 70 55
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <MotivationSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">
                {" "}
                {aboutContent.testimonial_title}
              </h6>
              <h2 className="section__title">
                {" "}
                {aboutContent.testimonial_subtitle}
              </h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
