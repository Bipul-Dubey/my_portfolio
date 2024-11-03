import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function CVerticalTimeline({ timelineData = [] }) {
  return (
    <VerticalTimeline lineColor="#8A73FB">
      {timelineData?.map((_, timelineIdx) => (
        <VerticalTimelineElement
          key={"VerticalTimelineElement" + timelineIdx}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "#000",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px,rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="2011 - present"
          iconStyle={{ background: "#8A73FB", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
