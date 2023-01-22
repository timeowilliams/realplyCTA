import React from "react";
import "./A.css";

function A(props) {
  const { className } = props;

  return (
    <div className={`a-1 ${className || ""}`}>
      <a href="https://calendly.com/timeo-mym/info-session" target="_blank" className="request-a-demo valign-text-middle roboto-medium-cod-gray-14px;">Request a Demo</a>
    </div>
  );
}

export default A;
