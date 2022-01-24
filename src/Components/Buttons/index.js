import React, { useState } from "react";
import "./index.css";

const Button = ({ title, type }) => {
  const types = {
    primary: {
      backgroundColor: "#0000ff",
    },
    warning: {
      backgroundColor: "rgb(166 201 9)",
    },
  };
  type ? console.log(type) : console.log("no type");
  return (
    <>
      <button
        className="yuva-button"
        style={{
          backgroundColor: type ? types[type].backgroundColor : "inherit",
        }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
