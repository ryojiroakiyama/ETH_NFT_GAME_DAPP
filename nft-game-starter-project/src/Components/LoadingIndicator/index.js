import React from "react";
import "./LoadingIndicator.css";

const LoadingIndicator = () => {
  return (
    <div className="lds-ring">
      <div>loading</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingIndicator;
