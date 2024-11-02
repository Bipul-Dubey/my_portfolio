import { SITE_DETAILS } from "../constants/siteconstants";
import { Desktop } from "../assets/index,";

export default function HeroSection() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "3% 1%",
        textAlign: "center",
        color: "rgba(10, 10, 10, 0.9)",
        gap: "21px",
        alignItems: "center",
        fontFamily: `Poppins, sans-serif`,
      }}
      className="unselectable"
    >
      <h1
        style={{
          fontWeight: 500,
          fontSize: "2.1rem",
        }}
      >
        {SITE_DETAILS.HERO_SECTION.HEADING}
      </h1>
      <h2
        style={{
          fontWeight: 400,
          fontSize: "1.5rem",
        }}
      >
        {SITE_DETAILS.HERO_SECTION.SUB_HEADING}
      </h2>
      <div
        style={{
          maxWidth: "650px",
          maxHeight: "550px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <img
          src={Desktop}
          alt="desktop_workspace"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            height: "auto",
            width: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  );
}
