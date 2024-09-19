import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import waterData from "../assets/data/waterData";
import { WaterTankData } from "../assets/data/categoriesData";
import "../styles/select.css";

const WaterTankListing = () => {
  // Kategorini Seç
  const [selectedCategory, setSelectedCategory] = useState("");

  // Kategori değiştiğinde bu fonksiyon çalışacak
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Seçilen kategoriyi state'e kaydet
  };

  const filteredCars = selectedCategory
    ? waterData.filter((car) => car.categoryId === parseInt(selectedCategory))
    : waterData;

  return (
    <Helmet title="Cars2">
      <CommonSection title="Modüler Su Deposu" />

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
                  {WaterTankData.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.description}
                    </option>
                  ))}
                </select>
              </div>
            </Col>

            {filteredCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default WaterTankListing;
