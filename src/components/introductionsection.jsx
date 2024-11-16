import { SITE_DETAILS } from "../constants/siteconstants";

export default function IntroductionSection() {
  return (
    <div
      style={{
        display: "flex",
      }}
      className="unselectable"
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#8a73fb",
          padding: "4% 0%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#fff",
            width: "90%",
            maxWidth: "800px",
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: "2rem",
            }}
          >
            {SITE_DETAILS.INTORDUCTION_SECTION.HEADING}
          </h2>
          <h3
            style={{
              fontWeight: 400,
              fontSize: "1.1rem",
            }}
          >
            {SITE_DETAILS.INTORDUCTION_SECTION.SUB_HEADING}
          </h3>
        </div>
      </div>
    </div>
  );
}
