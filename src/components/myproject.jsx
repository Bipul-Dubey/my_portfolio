import { Redirect } from "../assets/index,";
import { SITE_DETAILS } from "../constants/siteconstants";
import AnimatedContainer from "./common/animatedcontainer";
import IconStyle from "./common/iconstyle";
import Redirection from "./common/redirection";
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
      <SectionHeading heading="Personal Project" />
      <div
        style={{
          maxWidth: "90%",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {SITE_DETAILS.MY_PROJECTS.map((item, index) => (
          <AnimatedContainer
            key={index}
            style={{
              minHeight: "200px",
              minWidth: "200px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 45px",
              gap: "12px",
              textAlign: "center",
            }}
            className="c-technical-skill pop-out-container"
            classNameInView="in-view"
          >
            {!item.site_logo_url ? (
              <h4
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  border: "1px solid grey",
                  padding: "6px 8px",
                  borderRadius: "6px",
                }}
              >
                {item.site_name}
              </h4>
            ) : (
              <img src={item.site_logo_url} alt={item.site_name} />
            )}
            <h3
              style={{
                fontWeight: 400,
                fontSize: "18px",
                fontFamily: `Poppins, sans-serif`,
              }}
            >
              {item.short_description}
            </h3>
            <Redirection
              href={item.site_url || "#"}
              style={{
                marginTop: "20px",
              }}
            >
              <IconStyle src={Redirect} /> {item.site_url}
            </Redirection>
          </AnimatedContainer>
        ))}
      </div>
    </div>
  );
}
