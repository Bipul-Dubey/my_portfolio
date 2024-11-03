import React from "react";
import { SITE_DETAILS } from "../../constants/siteconstants";

export default function Logo() {
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
          color: "#f1860c",
        }}
      >
        {shortName}
      </div>
      <div
        style={{
          fontSize: "1.2rem",
        }}
      >
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    </div>
  );
}
