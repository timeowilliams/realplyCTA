import React from "react";
import "./A.css";

function A(props) {
  const { className } = props;

  return (
    <div className={`a-1 ${className || ""}`}>
      <div className="request-a-demo valign-text-middle roboto-medium-cod-gray-14px">Request a Demo</div>
    </div>
  );
}

export default A;
