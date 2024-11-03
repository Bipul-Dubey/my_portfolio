import SectionHeading from "./common/sectionheading";
import CVerticalTimeline from "./timelines/verticaltimeline";

export default function ProfessioneEperience() {
  return (
    <div
      style={{
        margin: "3% 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <SectionHeading heading="Professional Experiences" />
      <CVerticalTimeline timelineData={Array(5).fill(2)} />
    </div>
  );
}
