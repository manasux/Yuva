import React from "react";
import "./index.css";
import "../../root.css";

const Button = ({ title, type }) => {
  const types = {
    primary: {
      backgroundColor: "#0000ff",
      color: "#fff",
    },
    success: {
      backgroundColor: "#28A745",
      color: "#fff",
    },
    warning: {
      backgroundColor: "#FFC107",
      color: "#000",
    },
    danger: {
      backgroundColor: "#DC3545",
      color: "#fff",
    },
    info: {
      backgroundColor: "#17A2B8",
      color: "#ffffff",
    },
    text: {
      backgroundColor: "transparent",
      color: "#0000ff",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#000",
      border: "1px solid #000",
    },
    raised: {
      backgroundColor: "#fff",
      border: "1px solid #000",
      boxShadow: "5px 5px 5px rgba(0, 0, 255, .2)",
    },
  };
  type ? console.log(type) : console.log("no type");
  return (
    <>
      <button
        className="yuva-button"
        style={{
          backgroundColor: type ? types[type].backgroundColor : "inherit",
          color: type ? types[type].color : "inherit",
          border: type ? types[type].border : "inherit",
          boxShadow: type ? types[type].boxShadow : "inherit",
        }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
