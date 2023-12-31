import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="Loading..." /> SHOP
      <img src={arrow_icon} alt="Loading..." />
      {product.category} <img src={arrow_icon} alt="Loading..." />
      {product.name}
    </div>
  );
};

export default Breadcrums;
