import React from "react";

const Helmet = (props) => {
  document.title =
    "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
