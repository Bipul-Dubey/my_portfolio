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
            <div key={index} className="c-technical-skill"></div>
          ))}
      </div>
    </div>
  );
}
