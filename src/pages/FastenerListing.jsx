import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/fastenerData";
import { FastenerData } from "../assets/data/categoriesData";

const FastenerListing = () => {
  // Kategorini Seç
  const [selectedCategory, setSelectedCategory] = useState("");

  // Kategori değiştiğinde bu fonksiyon çalışacak
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Seçilen kategoriyi state'e kaydet
  };

  const filteredCars = selectedCategory
    ? carData.filter((car) => car.categoryId === parseInt(selectedCategory))
    : carData;

  return (
    <Helmet title="Cars">
      <CommonSection title="Bağlantı Elemanları" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
               {/*} <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Kategoriler
                </span>*/}

                <select
                  onChange={handleCategoryChange}
                  style={{
                    padding: "8px 10px",
                    borderRadius: "5px",
                    border: "2px solid #ccc",
                    backgroundColor: "#f8f9fa",
                    width: "100%",
                  }}
                  aria-label="Kategoriler"
                >
                  <option value="">Tüm Kategoriler</option>
                  {/* x.js'den gelen kategorileri render et */}
                  {FastenerData.map((category) => (
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

export default FastenerListing;
