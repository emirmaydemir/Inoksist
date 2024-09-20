import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductItem from "../components/UI/ProductItem";
import chemicalData from "../assets/data/chemicalData";
import { ChemicalData } from "../assets/data/categoriesData";
import "../styles/select.css";

//BAKIM KİMYASALLARI
const ChemicalsListing = () => {
  const { category } = useParams();

  // Kategorini Seç
  const [selectedCategory, setSelectedCategory] = useState("");

  // URL'den alınan kategori parametresini state'e ata
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  // Kategori değiştiğinde bu fonksiyon çalışacak
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Seçilen kategoriyi state'e kaydet
  };

  const filteredProducts = selectedCategory
    ? chemicalData.filter(
        (product) => product.categoryId === parseInt(selectedCategory)
      )
    : chemicalData;

  return (
    <Helmet title="products3">
      <CommonSection title="Bakım Kimyasalları" />

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
                  value={selectedCategory}
                >
                  <option value="">Tüm Kategoriler</option>
                  {ChemicalData.map((category) => (
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

export default ChemicalsListing;
