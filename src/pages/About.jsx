import React, { useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import MotivationSection from "../components/UI/MotivationSection";

import bolt from "../assets/all-images/civata2.jpg";
import Testimonial from "../components/UI/Testimonial";
import "../styles/about.css";

//HAKKIMIZDA
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Boş dizi, sadece bileşen ilk render edildiğinde çalışmasını sağlar
  return (
    <Helmet title="About">
      <CommonSection title="Hakkımızda" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={bolt} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Endüstriyel Çözümlerle Güçlü Bağlantılar Kuruyoruz
                </h2>

                <p className="section__description">
                  İnoksist Endüstri olarak, sektördeki ihtiyaçlara yönelik en
                  doğru çözümleri sunma konusunda kararlıyız. Müşterilerimizle
                  kurduğumuz güven temelli ilişkiler, bizi sadece bir tedarikçi
                  değil, aynı zamanda bir çözüm ortağı yapıyor. Her adımımızda
                  kaliteyi ön planda tutarak, sektördeki en zorlu talepleri dahi
                  karşılayabilecek ürünler ve hizmetler geliştirmeyi
                  sürdürüyoruz.
                </p>

                <p className="section__description">
                  Müşterilerimizin beklentilerini aşmayı hedefliyor, yenilikçi
                  ve sürdürülebilir üretim anlayışımızla sektörde fark
                  yaratıyoruz. İnoksist Endüstri olarak, güvenilirlik ve uzun
                  vadeli başarıya odaklanan bir iş modeli ile iş ortaklarımızın
                  başarısına değer katıyoruz. vadeli başarıya odaklanan bir iş
                  modeli ile iş ortaklarımızın başarısına değer katıyoruz.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Bize Ulaşın</h6>
                    <h4>+90 (212) 549 70 55</h4>
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
              <h6 className="section__subtitle">Öne Çıkan Ürünler</h6>
              <h2 className="section__title">Trend Ürünler</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
