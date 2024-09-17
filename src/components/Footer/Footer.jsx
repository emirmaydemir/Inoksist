import React from "react";
import image from "../../assets/all-images/inoksist.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Bağlantı Elemanları",
  },

  {
    path: "#",
    display: "Teknik Hırdavat",
  },

  {
    path: "/cars",
    display: "Bakım Kimyasalları",
  },
  {
    path: "/blogs",
    display: "Modüler Su Deposu",
  },

  {
    path: "/contact",
    display: "Fiyat Listeleri",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="12" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link
                  to="/home"
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <img src={image} alt="İnoksist" className="custom-logo" />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              İnoksist Endüstri Paslanmaz Civata ve Somon, yüksek kaliteli
              paslanmaz civata ve somon ürünleri ile endüstriyel çözümler
              sunmaktan gurur duyar. Deneyimimizle güvenilir ve dayanıklı
              ürünler sunarak, müşteri memnuniyetini ön planda tutarız. Kalite
              ve güvenin adresi Inoksist, her zaman yanınızda.
            </p>
          </Col>

          <Col lg="2" md="6" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Kategoriler</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="6" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">İletişim Bilgileri</h5>
              <p className="office__info">
                Adres: İ.O.S.B. Aykosan San. Sit. 4'lü B Blok No: 55
                Başakşehir/İSTANBUL
              </p>
              <p className="office__info">Telefon: +90 (212) 549 70 55</p>

              <p className="office__info">E-Mail:&nbsp;info@inoksist.com.tr</p>

              <p className="office__info">Çalışma Saatleri: 9.00 - 19.00</p>
            </div>
          </Col>

          <Col lg="3" md="12" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Bize Ulaşın</h5>
              <p className="section__description">Bizimle İletişime Geçin</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>
                {year} Tüm Hakları saklıdır inoksist.com.tr ® || DigiSoftware
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
