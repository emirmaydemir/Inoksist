import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import { useTranslation } from "react-i18next";

const ServicesList = () => {
  const { t } = useTranslation("service");
  const servicesData = t("services", { returnObjects: true });
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="6" md="6" sm="6" className="mb-4">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
