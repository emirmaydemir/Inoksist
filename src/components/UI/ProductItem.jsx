import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/product-item.css";

const ProductItem = (props) => {
  const { imgUrl, name, category } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="product__item">
        <div className="product__img">
          <Link to={`/products/${category}/${name}`}>
            <img src={imgUrl} alt="" className="w-100" />
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
