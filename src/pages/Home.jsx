import React, { useEffect } from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import sponsor from "../assets/all-images/markalar.jpg";
import { Container, Row, Col } from "reactstrap";
import "../styles/find-product-form.css";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import Testimonial from "../components/UI/Testimonial";
import { useTranslation } from "react-i18next";
import TrendyolSection from "../components/UI/TrendyolSection";

//ANASAYFA
const Home = () => {
  const { t } = useTranslation("service");
  const homeContent = t("services_title", { returnObjects: true });
  const testimonialContent = t("testimonial", { returnObjects: true });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Boş dizi, sadece bileşen ilk render edildiğinde çalışmasını sağlar
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="12" md="12" sm="12">
                <div className="find__cars-right">
                  <img src={sponsor} alt="Sponsorlar" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">{homeContent.title}</h6>
              <h2 className="section__title">{homeContent.subtitle}</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <TrendyolSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">{testimonialContent.title}</h6>
              <h2 className="section__title">{testimonialContent.subtitle}</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
