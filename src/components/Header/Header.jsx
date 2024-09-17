import React, { useRef, useState } from "react";
import image from "../../assets/all-images/inoksist.png";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Anasayfa",
  },
  {
    path: "/about",
    display: "Hakkımızda",
  },
  {
    path: "/cars",
    display: "Bağlantı Elemanları",
  },

  {
    path: "/cars",
    display: "Teknik Hırdavat",
  },
  {
    path: "/cars",
    display: "Bakım Kimyasalları",
  },
  {
    path: "/cars",
    display: "Modüler Su Deposu",
  },
  {
    path: "/blogs",
    display: "Fiyat Listeleri",
  },
  {
    path: "/contact",
    display: "İletişim",
  },
];

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [isTurkish, setIsTurkish] = useState(true);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const toggleFlag = () => setIsTurkish(!isTurkish);

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span className="header__top__help">
                  <i class="ri-mail-fill"></i> info@inoksist.com.tr
                </span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +90 (212) 549 70 55
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-4">
                {socialLinks.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="d-flex align-items-center gap-1"
                  >
                    <i className={item.icon}></i>
                  </Link>
                ))}
                <button onClick={toggleFlag} className="flag-btn">
                  {isTurkish ? (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
                      alt="Turkish"
                      className="flag-icon"
                    />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                      alt="English"
                      className="flag-icon"
                    />
                  )}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container fluid>
          <Row>
            <Col>
              <div className="logo">
                <Link
                  to="/home"
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <img src={image} alt="İnoksist" className="custom-logo" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
