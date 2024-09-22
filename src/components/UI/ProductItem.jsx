import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/product-item.css";

const ProductItem = (props) => {
  const { imgUrl, name, category } = props.item;
  const getDataByCategory = (category) => {
    switch (category) {
      case "fastenerData":
        return "products";
      case "hardwareData":
        return "products2";
      case "chemicalData":
        return "products3";
      case "waterData":
        return "products4";
      default:
        return [];
    }
  };

  const product = getDataByCategory(category);

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="product__item">
        <div className="product__img">
          <Link
            to={`/${product}/${category}/${name}`}
            aria-label={`${name} ürününün detay sayfasını görüntüle`}
          >
            <img src={imgUrl} alt="Civata" className="w-100" loading="lazy" />
          </Link>
        </div>

        <div className="product__img-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
