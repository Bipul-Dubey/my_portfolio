import React from "react";
import { SITE_DETAILS } from "../../constants/siteconstants";
import PropTypes from "prop-types";

export default function Logo({ color, shortColor }) {
  const firstName = SITE_DETAILS.NAME.split(" ").at(0) ?? "First";
  const lastName = SITE_DETAILS.NAME.split(" ").at(-1) ?? "last";
  const shortName = firstName[0] + lastName[0];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        textTransform: "uppercase",
      }}
      className="karla-font"
    >
      <div
        style={{
          fontSize: "3.4rem",
          color: shortColor,
        }}
      >
        {shortName}
      </div>
      <div
        style={{
          fontSize: "1.2rem",
          color: color,
          lineHeight: 1,
        }}
      >
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    </div>
  );
}

Logo.propTypes = {
  color: PropTypes.string,
  shortColor: PropTypes.string,
};

Logo.defaultProps = {
  color: "#000",
  shortColor: "#f1860c",
};
