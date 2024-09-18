import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, name } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <Link to={`/cars/${name}`}>
            <img src={imgUrl} alt="" className="w-100" />
          </Link>
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
