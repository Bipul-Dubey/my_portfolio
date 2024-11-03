import { useElementInView } from "../customhooks/intersectionobserver";
import SectionHeading from "./common/sectionheading";

export default function MyProject() {
  return (
    <div
      style={{
        margin: "3% 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
        gap: "12px",
      }}
    >
      <SectionHeading heading="My Project" />
      <div
        style={{
          maxWidth: "90%",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {Array(2)
          .fill(4)
          .map((_, index) => (
            <ProjectContainer key={index} />
          ))}
      </div>
    </div>
  );
}

const ProjectContainer = () => {
  const [targetRef, isInView] = useElementInView({ threshold: 0.2 });

  return (
    <div
      key={"ProjectContainer"}
      ref={targetRef}
      className={`c-technical-skill pop-out-container ${
        isInView ? "in-view" : ""
      }`}
    ></div>
  );
};
