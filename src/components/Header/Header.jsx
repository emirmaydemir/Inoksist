import React, { useRef, useState, useEffect } from "react";
import image from "../../assets/all-images/inoksist.png";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import allProducts from "../../assets/data/allProducts";

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
    path: "/products",
    display: "Bağlantı Elemanları",
    subMenu: [
      { path: "/products/1", display: "Paslanmaz Bağlantı Elemanları" },
      { path: "/products/2", display: "Çelik Bağlantı Elemanları" },
      { path: "/products/3", display: "Demir Bağlantı Elemanları" },
      { path: "/products/4", display: "Pirinç Bağlantı Elemanları" },
      { path: "/products/5", display: "Titanyum Bağlantı Elemanları" },
      { path: "/products/6", display: "Özel Üretim Bağlantı Elemanları" },
      { path: "/products/7", display: "10.9 ve 12.9 Bağlantı Elemanları" },
    ],
  },
  {
    path: "/products2",
    display: "Teknik Hırdavat",
    subMenu: [
      { path: "/products2/1", display: "Delme Kesme Yağları Grubu" },
      { path: "/products2/2", display: "İş Güvenliği Grubu" },
      { path: "/products2/3", display: "Kaynak Ekipmanları Grubu" },
      { path: "/products2/4", display: "Kesici Ve Aşındırıcı Grubu" },
      { path: "/products2/5", display: "Ambalaj ve Paketleme Grubu" },
      { path: "/products2/6", display: "Sızdırmazlık Grubu" },
      { path: "/products2/7", display: "Sprey Boya" },
      { path: "/products2/8", display: "Yapı Kimyasalları Grubu" },
      { path: "/products2/9", display: "Yapıştırıcı Grubu" },
    ],
  },
  {
    path: "/products3",
    display: "Bakım Kimyasalları",
    subMenu: [{ path: "/products3/1", display: "Bakım Kimyasalları" }],
  },
  {
    path: "/products4",
    display: "Modüler Su Deposu",
    subMenu: [{ path: "/products4/1", display: "Modüler Su Deposu" }],
  },
  {
    path: "/price",
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
                  placeholder="Arama"
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
