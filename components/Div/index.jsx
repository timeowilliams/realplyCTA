import React from "react";
import "./Div.css";

function Div(props) {
  const { place, className } = props;

  return (
    <div className={`div-39 helvetica-regular-normal-cod-gray-14px ${className || ""}`}>
      <div className="place-3 valign-text-middle">{place}</div>
      <p className="surname valign-text-middle">Head of Design at xyz</p>
    </div>
  );
}

export default Div;
