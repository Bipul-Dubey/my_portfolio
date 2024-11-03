import { useElementInView } from "../customhooks/intersectionobserver";
import SectionHeading from "./common/sectionheading";

export default function TechnicalSkills() {
  return (
    <div
      style={{
        margin: "3% 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "7px",
      }}
    >
      <SectionHeading heading="Familier with Technology" />
      <div
        style={{
          maxWidth: "90%",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {Array(3)
          .fill(1)
          .map((_, index) => (
            <TechnicalSkillContainer key={index} />
          ))}
      </div>
    </div>
  );
}

const TechnicalSkillContainer = () => {
  const [targetRef, isInView] = useElementInView({ threshold: 0.2 });

  return (
    <div
      ref={targetRef}
      className={`c-technical-skill pop-out-container ${
        isInView ? "in-view" : ""
      }`}
    ></div>
  );
};
