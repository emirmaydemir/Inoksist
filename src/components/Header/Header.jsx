import React, { useRef, useState, useEffect } from "react";
import image from "../../assets/all-images/inoksist.png";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import allProducts from "../../assets/data/allProducts";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
    display: "facebook",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
    display: "instagram",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
    display: "linkedin",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
    display: "twitter",
  },
];

const Header = () => {
  const { t, i18n } = useTranslation("navbar");
  const navLinks = t("navLinks", { returnObjects: true });
  const search = t("search", { returnObjects: true });
  // Dil için
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
  };

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  //  --ARAMA İÇİN--
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const resultsRef = useRef(null); // Arama sonuçları kapsayıcı referansı
  const searchBoxRef = useRef(null); // Arama kutusu referansı

  // Arama fonksiyonu
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchTerm(searchQuery);

    if (searchQuery.trim()) {
      const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Tıklama dışı olaylarını kontrol etme
  const handleClickOutside = (event) => {
    if (
      resultsRef.current &&
      !resultsRef.current.contains(event.target) &&
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target)
    ) {
      setSearchResults([]); // Arama sonuçlarını temizle
    }
  };

  // Seçim yapıldığında arama sonuçlarını temizleme
  const handleResultClick = () => {
    setSearchTerm(""); // Arama kutusundaki metni temizle
    setSearchResults([]); // Arama sonuçlarını temizle
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="8" md="8" sm="8">
              <div className="header__top__left">
                <Link to="/home" className="header__top__help">
                  <img
                    src={image}
                    alt="İnoksist"
                    className="header__top__logo"
                    aria-label="Ana Sayfaya Git"
                  />
                </Link>
                <span className="header__top__help">
                  <i className="ri-mail-fill"></i> info@inoksist.com.tr
                </span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +90 (212) 549 70 55
                </span>
              </div>
            </Col>

            <Col lg="4" md="4" sm="4">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-4">
                {socialLinks.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="d-flex align-items-center gap-1"
                    aria-label={`${item.display} sayfamızı ziyaret edin`}
                  >
                    <i className={item.icon}></i>
                  </Link>
                ))}
                <button onClick={toggleLanguage} className="flag-btn">
                  {i18n.language === "tr" ? (
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

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <div className="nav__item-container" key={index}>
                    <NavLink
                      to={item.path}
                      aria-label={`${item.display} sayfasına git`}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                    >
                      {item.display}
                    </NavLink>

                    {/* Eğer alt menü varsa göster */}
                    {item.subMenu && (
                      <div className="sub__menu">
                        {item.subMenu.map((subItem, subIndex) => (
                          <NavLink
                            to={subItem.path}
                            className="sub__menu-item"
                            key={subIndex}
                            aria-label={`Kategorimizdeki ${subItem.display} sayfasına git`}
                          >
                            {subItem.display}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Arama kutusu */}
            <div className="nav__right">
              <div className="search__box" ref={searchBoxRef}>
                <input
                  type="text"
                  placeholder={search.display}
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

              {/* Arama sonuçlarını göster */}
              {searchResults.length > 0 && (
                <div className="search-results" ref={resultsRef}>
                  {searchResults.map((product, index) => (
                    <Link
                      to={`/products/${product.category}/${product.name}`}
                      key={index}
                      className="search-result-card"
                      onClick={() => handleResultClick(product)}
                      aria-label={`${product.name} ürününün detaylarını görüntüle`}
                    >
                      <img src={product.imgUrl} alt={product.name} />
                      <p>{product.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
