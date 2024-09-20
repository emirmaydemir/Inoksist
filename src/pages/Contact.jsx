import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

//İLETİŞİM
const Contact = () => {
  return (
    <Helmet title="İletişim">
      <CommonSection title="İletişim" />
      <section>
        <Container>
          {/* Üst Kısım: Kart ile Adres, Telefon, Email ve Sosyal Medya */}
          <Row className="mb-5">
            <Col lg="12">
              <Card className="contact__card p-4">
                <CardBody className="d-flex flex-column flex-md-row align-items-stretch">
                  <Row className="w-100 g-3">
                    {/* Adres */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold">Adres</p>
                        <p>
                          Küçükçekmece i.o.s.b. mah. İmsan Sanayi sitesi E 3
                          blok sok no 3 küçükçekmece / İSTANBUL
                        </p>
                      </div>
                    </Col>

                    {/* Telefon */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold">Telefon</p>
                        <p>+90 (212) 549 70 55</p>
                      </div>
                    </Col>

                    {/* Email */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold">E-Mail</p>
                        <p>info@inoksist.com.tr</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Alt Kısım: Google Maps ve Form */}
          <Row className="mt-5">
            {/* Sol Kısım: Google Haritalar */}
            <Col
              lg="5"
              md="12"
              sm="12"
              className="d-flex align-items-stretch mb-4 mb-md-0"
            >
              <div
                className="map-container"
                style={{ width: "100%", height: "500px" }}
              >
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6016.617526971584!2d28.787778000000003!3d41.062243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa591c3cabfa9%3A0x86483f9112bb615f!2s%C4%B0noksist%20Paslanmaz%20Civata%20Somun%20Pul%20Ana%20Tedarik%C3%A7isi!5e0!3m2!1str!2str!4v1726692358510!5m2!1str!2str&gestureHandling=greedy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </Col>

            {/* Dikey Çizgi */}
            <Col lg="1" className="d-none d-md-flex justify-content-center">
              <div className="vertical-divider"></div>
            </Col>

            {/* Sağ Kısım: İletişim Formu */}
            <Col lg="6" md="12" sm="12" className="d-flex align-items-stretch">
              <div style={{ width: "100%" }}>
                <h6 className="fw-bold mb-4 contact-form-title">
                  İletişim Formu
                </h6>
                <Form
                  className="d-flex flex-column justify-content-between"
                  style={{ height: "100%" }}
                >
                  <FormGroup className="contact__form">
                    <Input placeholder="Adınız" type="text" />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input placeholder="Email" type="email" />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input placeholder="Firma Adı" type="text" />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input placeholder="Telefon" type="tel" />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input placeholder="Konu" type="text" />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <textarea
                      rows="5"
                      placeholder="Mesajınız"
                      style={{
                        width: "100%",
                        minHeight: "150px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        resize: "vertical",
                      }}
                      className="textarea"
                    ></textarea>
                  </FormGroup>
                  <button className="contact__btn" type="submit">
                    Gönder
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
