import styled from "styled-components";
import {
  StyledHorizontalLine,
  StyledSectionContainer,
  Title,
} from "./commonComponents";
import { PersonalProjectList } from "@/common/constant";
import Link from "next/link";
import { useState } from "react";

const StyledProjectsContainer = styled("div")(({}) => ({
  display: "flex",
  maxWidth: "90%",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 12,
  marginBottom: 27,
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
}));

const StyledProjectMainContainer = styled("div")(({ isOne }) => ({
  flex: 1,
  flexBasis: "45%",
}));

const StyledProjectImageContainer = styled("div")(({}) => ({
  backgroundColor: "#ecebeb",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 3,
}));

const StyledProjectInfoContainer = styled("div")(({}) => ({
  backgroundColor: "#fff",
  width: "100%",
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
  backgroundColor: "#ce0d7b",
  padding: 7,
  borderRadius: 21,
}));

const StyledSliderLink = styled("a")(({}) => ({
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
const StyledCard = styled("div")(({ isSameRow = false, noBorder = false }) => ({
  padding: 7,
  marginTop: 12,
  boxShadow: noBorder ? "" : "0px 0px 3px rgba(0, 0, 0, 0.25)",
  borderRadius: 7,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: isSameRow ? "row" : "column",
}));

const PersonalProject = () => {
  const [previewIndex, setPreviewIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <StyledSectionContainer id="projects" bgcolor="#f6f2f2">
      <Title type="h3" capitalize fontType="1">
        Personal Projects
      </Title>
      <StyledProjectsContainer>
        {PersonalProjectList?.map((item, idx) => (
          <StyledProjectMainContainer>
            <StyledProjectInfoContainer>
              <StyledCard noBorder isSameRow>
                <Title type="h4" bold fontType="2">
                  {item?.name} {idx}
                </Title>
                {previewIndex == idx ? (
                  <Title
                    type="h5"
                    bold
                    fontType="2"
                    link
                    onClick={() => {
                      setPreviewIndex(null);
                      setImageIndex(0);
                    }}
                  >
                    Description &rArr;
                  </Title>
                ) : (
                  <Title
                    type="h5"
                    bold
                    fontType="2"
                    link
                    onClick={() => {
                      setPreviewIndex(idx);
                      setImageIndex(0);
                    }}
                  >
                    Preview &rArr;
                  </Title>
                )}
              </StyledCard>
              {previewIndex == idx ? (
                <StyledProjectImageContainer>
                  <StyledSliderWrapper>
                    <StyledSliderContainer>
                      {item.images?.map((img, index) =>
                        imageIndex == index ? (
                          <StyledImage src={img} alt={img} />
                        ) : null
                      )}
                    </StyledSliderContainer>
                    <StyledSliderNavbar>
                      {item.images?.map((_, index) => (
                        <StyledSliderLink
                          onClick={() => {
                            setImageIndex(index);
                          }}
                        />
                      ))}
                    </StyledSliderNavbar>
                  </StyledSliderWrapper>
                </StyledProjectImageContainer>
              ) : (
                <div>
                  {" "}
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
                    {item?.features?.map((feature, index) => (
                      <div>
                        <Title
                          inline
                          style={{
                            fontSize: "1rem",
                            textAlign: "justify",
                          }}
                        >
                          {feature}
                        </Title>
                        {item?.features?.length - 1 != index ? (
                          <StyledHorizontalLine />
                        ) : (
                          ""
                        )}
                      </div>
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
                </div>
              )}
            </StyledProjectInfoContainer>
          </StyledProjectMainContainer>
        ))}
      </StyledProjectsContainer>
    </StyledSectionContainer>
  );
};

export default PersonalProject;
