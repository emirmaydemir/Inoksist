import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR__MEMBERS = [
  {
    name: "Emir Aydemir",
    experience: "Makine Mühendisi (+90)  532 123 45 67",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Kadriye Kartal",
    experience: "Malzeme Mühend (+90) 532 234 56 78",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Burak Bulut",
    experience: "Kalite Kontrol Uzmanı (+90) 532 345 67 89",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Kadir Kartal",
    experience: "Üretim Müdürü (+90) 532 456 78 90",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl} aria-label="facebook">
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl} aria-label="twitter">
                  <i className="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl} aria-label="linkedin">
                  <i className="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl} aria-label="instagram">
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
