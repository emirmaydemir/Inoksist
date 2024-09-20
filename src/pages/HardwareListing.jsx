import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductItem from "../components/UI/ProductItem";
import hardwareData from "../assets/data/hardwareData";
import { HardwareData } from "../assets/data/categoriesData";
import "../styles/select.css";

//TEKNİK HIRDAVAT
const HardwareListing = () => {
  // Kategorini Seç
  const [selectedCategory, setSelectedCategory] = useState("");

  // Kategori değiştiğinde bu fonksiyon çalışacak
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Seçilen kategoriyi state'e kaydet
  };

  const filteredProducts = selectedCategory
    ? hardwareData.filter(
        (car) => car.categoryId === parseInt(selectedCategory)
      )
    : hardwareData;

  return (
    <Helmet title="products2">
      <CommonSection title="Teknik Hırdavat" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                {/*} <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Kategoriler
                </span>*/}

                <select
                  onChange={handleCategoryChange}
                  className="custom-select"
                  aria-label="Kategoriler"
                >
                  <option value="">Tüm Kategoriler</option>
                  {HardwareData.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.description}
                    </option>
                  ))}
                </select>
              </div>
            </Col>

            {filteredProducts.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HardwareListing;
