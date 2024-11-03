export default function TechnicalSkills() {
  return (
    <div
      style={{
        margin: "3% 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "90%",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {Array(7)
          .fill(1)
          .map((_, index) => (
            <div key={index} className="c-technical-skill "></div>
          ))}
      </div>
    </div>
  );
}
