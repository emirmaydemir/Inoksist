import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/UI/ContactForm";
import { toast } from "react-toastify";

//İLETİŞİM
const Contact = () => {
  const { t } = useTranslation("contact");
  const contactContent = t("contact", { returnObjects: true });

  // --Mail Gönderme--
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Form verilerini güncelleme fonksiyonu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Form verilerinin tüm alanlarının doldurulup doldurulmadığını kontrol et
    const emptyFields = Object.keys(formData).filter(
      (key) => formData[key].trim() === ""
    );
    if (emptyFields.length > 0) {
      toast.error("Lütfen tüm alanları doldurunuz.");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Form doğrulaması başarısızsa e-posta gönderimini durdur
    setLoading(true);

    emailjs
      .send(
        "service_7lqnnch", // Service ID (EmailJS dashboard'dan alın)
        "template_g1d4m8m", // Template ID (EmailJS dashboard'dan alın)
        formData, // Form verileri
        "s-AQQB-m426dLJyWz" // User ID (EmailJS dashboard'dan alın)
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Mesaj başarıyla gönderildi!"); // Başarı mesajı
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        }); // Formu temizle
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Mesaj gönderilirken bir hata oluştu."); // Hata mesajı
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // --Mail Gönderme--

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Boş dizi, sadece bileşen ilk render edildiğinde çalışmasını sağlar

  return (
    <Helmet title={contactContent.title}>
      <CommonSection title={contactContent.title} />
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
                        <p className="fw-bold">
                          {contactContent.address.label}
                        </p>
                        <p>
                          Küçükçekmece i.o.s.b. mah. İmsan Sanayi sitesi E 3
                          blok sok no 3 küçükçekmece / İSTANBUL
                        </p>
                      </div>
                    </Col>

                    {/* Telefon */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold"> {contactContent.phone.label}</p>
                        <p>+90 (212) 549 70 55</p>
                      </div>
                    </Col>

                    {/* Email */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold"> {contactContent.email.label}</p>
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
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                sendEmail={sendEmail}
                contactContent={contactContent}
                loading={loading}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
