import StackIcon from "tech-stack-icons";
import { SITE_DETAILS } from "../constants/siteconstants";
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
        color: "#000",
      }}
    >
      <SectionHeading heading="Technical Skills" />
      {/* skill section */}
      {SITE_DETAILS.TECHNICAL_SKILL.map((item) => (
        <div
          key={item.category + "container"}
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "12px 0px",
          }}
        >
          <h4
            key={"heading-" + item.category}
            style={{
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            {item.category}
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4px",
              flexWrap: "wrap",
            }}
          >
            {item.skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  border: "2px solid #d9d8da",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                <StackIcon
                  name={skill.logo}
                  style={{
                    height: "50px",
                    width: "55px",
                    display: "flex",
                  }}
                />
                <h5>{skill.name}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
