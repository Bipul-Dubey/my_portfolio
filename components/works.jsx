import React from "react";
import { StyledSectionContainer, Title } from "./commonComponents";
import styled from "styled-components";
import Image from "next/image";
import { WorkExperince } from "@/common/constant";

const StyledTimeLineContainer = styled("div")(({}) => ({
  width: "90%",
  position: "relative",
  margin: "100px auto",
  "@media (max-width: 768px)": {
    margin: "50px auto",
  },
}));

const StyledExperinceContainer = styled("div")(({ isLeft }) => ({
  position: "relative",
  width: "50%",
  padding: "10px 50px",
  left: isLeft ? "" : "50%",
  margin: "2px 0px",
  "@media (max-width: 768px)": {
    width: "100%",
    paddingLeft: "80px",
    paddingRight: "25px",
    left: 0,
  },
}));

const StyledExperinceInfoContainer = styled("div")(({}) => ({
  padding: "20px 30px",
  backgroundColor: "white",
  position: "relative",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
}));

const StyledImageContainer = styled("div")(({ src, isLeft }) => ({
  position: "absolute",
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  zIndex: "10",
  right: isLeft ? "-20px" : "",
  left: isLeft ? "" : "-20px",
  top: "20px",
  "@media (max-width: 768px)": {
    left: 0,
    right: 0,
  },
}));

const StyledSideArrow = styled("span")(({ isLeft }) => ({
  height: 0,
  width: 0,
  position: "absolute",
  top: "20px",
  zIndex: 1,
  borderTop: "12px solid transparent",
  borderBottom: "12px solid transparent",
  borderLeft: "12px solid #fff",
  right: isLeft ? "-12px" : "",
  left: isLeft ? "" : "-12px",
  transform: isLeft ? "" : "scaleX(-1)",
  "@media (max-width: 768px)": {
    left: "-12px",
    transform: "scaleX(-1)",
  },
}));

const StyledListContainer = styled("div")(({}) => ({}));

const StyledListItem = styled("li")(({}) => ({}));

const Works = () => {
  return (
    <StyledSectionContainer id="works" bgcolor="#d4ecf2">
      <Title type="h3" capitalize fontType="1">
        Work Experience
      </Title>
      <StyledTimeLineContainer bgColor="red">
        {WorkExperince?.map((work, index) => (
          <StyledExperinceContainer isLeft={index % 2 == 0}>
            <StyledImageContainer isLeft={index % 2 == 0}>
              <Image
                src={work?.image}
                width="40"
                height="40"
                alt="Company"
                objectFit="cover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              />
            </StyledImageContainer>
            <StyledExperinceInfoContainer>
              <Title type="h4" fontType="3">
                {work?.company_name}
              </Title>
              <Title type="p" fontType="3" color="gray">
                {work?.duration}
              </Title>
              <Title type="h5" fontType="3">
                {work?.role}
              </Title>
              <StyledListContainer>
                {work?.description?.map((item) => (
                  <StyledListItem>
                    <Title inline>{item}</Title>
                  </StyledListItem>
                ))}
              </StyledListContainer>
              <StyledSideArrow isLeft={index % 2 == 0} />
            </StyledExperinceInfoContainer>
          </StyledExperinceContainer>
        ))}
      </StyledTimeLineContainer>
    </StyledSectionContainer>
  );
};

export default Works;
