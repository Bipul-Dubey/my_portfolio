import { useState } from "react";
import { SITE_DETAILS } from "../constants/siteconstants";
import AnimatedContainer from "./common/animatedcontainer";
import SectionHeading from "./common/sectionheading";

export default function ProfessioneEperience() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      style={{
        margin: "3% 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
        gap: "7px",
      }}
    >
      <SectionHeading heading="Professional Experiences" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {SITE_DETAILS.PROFESSIONAL_EXPERIENCE.map((item, index) => (
          <AnimatedContainer
            key={item.end_date}
            style={{
              width: "70%",
              borderRadius: "8px",
              padding: "8px",
              display: "flex",
              flexWrap: "wrap",
              gap: "22px",
            }}
            className={`glass-effect-1 ${
              index % 2 == 0
                ? "viewport-2-container-right"
                : "viewport-2-container-left"
            }`}
            classNameInView="view-in"
          >
            {/* image */}
            <div
              style={{
                padding: "6px",
                borderRadius: "6px",
                height: "100px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={item.icon} alt="" height={"55px"} width={"55px"} />
            </div>
            {/* other details */}
            <div
              style={{
                lineHeight: 1.3,
              }}
            >
              {/* company name */}
              <h3
                style={{
                  fontWeight: 600,
                }}
              >
                {item.company_name}
              </h3>
              <h4
                style={{
                  fontWeight: 400,
                }}
              >
                {item.position} ({item.role})
              </h4>
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                {item.start_date} - {item.end_date}
              </span>
              {showMore === index && (
                <div
                  style={{
                    marginTop: "15px",
                  }}
                >
                  {item.responsibilities?.map((resp, respIdx) => (
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      key={respIdx + "responsibilities"}
                    >
                      {resp}
                    </div>
                  ))}
                </div>
              )}
              <div
                className="show-more"
                onClick={() => {
                  index === showMore ? setShowMore(null) : setShowMore(index);
                }}
              >
                Show More...
              </div>
            </div>
          </AnimatedContainer>
        ))}
      </div>
    </div>
  );
}
