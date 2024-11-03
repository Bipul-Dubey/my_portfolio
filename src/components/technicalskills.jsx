import AnimatedContainer from "./common/animatedcontainer";
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
        {Array(4)
          .fill(1)
          .map((_, index) => (
            <AnimatedContainer
              key={index}
              style={{
                minHeight: "400px",
                minWidth: "450px",
                maxWidth: "600px",
              }}
            ></AnimatedContainer>
          ))}
      </div>
    </div>
  );
}
