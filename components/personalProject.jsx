import styled from "styled-components";
import { StyledSectionContainer, Title } from "./commonComponents";
import { PersonalProjectList } from "@/common/constant";
import Link from "next/link";

const StyledProjectMainContainer = styled("div")(({ isOne }) => ({
  width: "90vw",
  height: "80vh",
  display: "flex",
  marginTop: "0.1rem",
  marginBottom: isOne ? "" : 17,
  padding: 3,
  gap: 2,
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
}));

const StyledProjectImageContainer = styled("div")(({}) => ({
  backgroundColor: "#ecebeb",
  width: "50%",
  height: "100%",
  "@media (max-width: 768px)": {
    width: "100%",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 7,
}));

const StyledProjectInfoContainer = styled("div")(({}) => ({
  backgroundColor: "#fff",
  width: "50%",
  height: "100%",
  padding: 14,
  "@media (max-width: 768px)": {
    width: "100%",
  },
}));

// carousel
const StyledSliderWrapper = styled("div")(({}) => ({
  position: "relative",
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "0 auto",
}));

const StyledSliderContainer = styled("div")(({}) => ({
  display: "flex",
  aspectRatio: "11/9",
  overflowX: "hidden",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
}));

const StyledSliderNavbar = styled("div")(({}) => ({
  display: "flex",
  columnGap: "1rem",
  position: "absolute",
  bottom: "1.25rem",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 100,
}));

const StyledSliderLink = styled(Link)(({}) => ({
  width: "0.5rem",
  height: "0.5rem",
  borderRadius: "50%",
  backgroundColor: "#fff",
  opacity: "0.75",
  transition: "opacity ease 250ms",
  "&:hover": {
    opacity: 1,
  },
}));

const StyledImage = styled("img")(({}) => ({
  flex: "1 0 100%",
  scrollSnapAlign: "start",
  objectFit: "fill",
  maxWidth: "100%",
}));

// tech stack card
const StyledCard = styled("div")(({}) => ({
  padding: 7,
  marginTop: 12,
  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)",
  borderRadius: 7,
}));

const PersonalProject = () => {
  return (
    <StyledSectionContainer id="projects" bgcolor="#f6f2f2">
      <Title type="h3" capitalize fontType="1">
        Personal Projects
      </Title>
      {PersonalProjectList?.map((item, idx) => (
        <StyledProjectMainContainer isOne={false}>
          <StyledProjectImageContainer>
            <StyledSliderWrapper>
              <StyledSliderContainer>
                {item.images?.map((img, index) => (
                  <StyledImage id={`slide-${index}`} src={img} alt={img} />
                ))}
              </StyledSliderContainer>
              <StyledSliderNavbar>
                {item.images?.map((_, index) => (
                  <StyledSliderLink href={`#slide-${index}`} />
                ))}
              </StyledSliderNavbar>
            </StyledSliderWrapper>
          </StyledProjectImageContainer>
          <StyledProjectInfoContainer>
            <Title type="h4" bold fontType="2">
              {item?.name}
            </Title>
            <StyledCard>
              <Title bold fontType="2" style={{ fontSize: "1.1rem" }}>
                Technology/Tools used
              </Title>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                {item?.technology?.map((tech) => (
                  <li style={{ marginLeft: "2px" }}>
                    <span style={{ position: "relative", left: "-12px" }}>
                      {tech}
                    </span>
                  </li>
                ))}
              </div>
            </StyledCard>
            <StyledCard>
              <Title bold style={{ fontSize: "1.1rem" }} fontType="2">
                Features
              </Title>
              {item?.features?.map((feature) => (
                <li>
                  <Title
                    inline
                    style={{
                      position: "relative",
                      left: "-7px",
                      fontSize: "1rem",
                    }}
                  >
                    {feature}
                  </Title>
                </li>
              ))}
            </StyledCard>
            <StyledCard>
              <Title bold style={{ fontSize: "1.1rem" }} fontType="2">
                Links
              </Title>
              {item?.links?.map((lk) => (
                <li>
                  <Link href={lk.link}>{lk.site}</Link>
                </li>
              ))}
            </StyledCard>
          </StyledProjectInfoContainer>
        </StyledProjectMainContainer>
      ))}
    </StyledSectionContainer>
  );
};

export default PersonalProject;
