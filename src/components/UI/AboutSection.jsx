import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/civata3.jpg";

const AboutSection = ({ aboutClass }) => {
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
              <h4 className="section__subtitle">Hakkımızda</h4>
              <h2 className="section__title">
                İnoksist Endüstri'ye Hoşgeldiniz
              </h2>
              <p className="section__description">
                2013 yılında temelleri atılan İnoksist Endüstri geçmişten gelen
                bilgi birikimi ve ürün tecrübesi ile bağlantı elemanları ve
                endüstriyel ürünler alanında kısa süre içerisinde sektörde
                kendisine önemli bir yer edinmiştir. İnoksist Endüstrinin bu
                gelişiminin arkasında müşteri odaklı ve bir tedarikçiden ziyade
                bir çözüm ortağı olmayı ilke edinen bir yönetim anlayışı vardır.
                Hizmet verdiği tüm alanlarda sorumlulukların bilincinde olan
                İnoksist Endüstri, faaliyetini her zaman için müşteri
                memnuniyeti ve en önemlisi ‘’güven’’ ilkesini temel alarak
                sürdürmektedir…
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Yüksek Kalite
                  Standartları
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Geniş Ürün Yelpazesi
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Müşteri Odaklı
                  Hizmet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Hızlı ve Güvenilir
                  Teslimat
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
