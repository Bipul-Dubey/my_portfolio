import React from "react";
import styled from "styled-components";
import { Title } from "./commonComponents";
import Image from "next/image";

// container for timeliner
const StyledContainer = styled("div")(({ isLeft }) => ({
  backgroundColor: "#9ed2dd",
  boxShadow: "0px 0px 2px 4px rgba(234, 234, 234, 0.4)",
  borderRadius: "15px",
  width: "40%",
  display: "flex",
  alignSelf: isLeft ? "start" : "end",
  marginLeft: isLeft ? "5rem" : "",
  marginRight: !isLeft ? "5rem" : "",
  marginTop: "1rem",
  marginBottom: "1rem",
  "@media (max-width: 768px)": {
    alignSelf: "center",
    margin: "1rem 0px 1rem 0px",
  },
  padding: "1rem",
}));

const StyledSkilledContainer = styled("div")(({}) => ({
  // backgroundColor: "gray",
  marginTop: "7px",
  padding: "7px",
  width: "80%",
  minHeight: "50px",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  flexWrap: "wrap",
}));

const StyledSkillsContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "3px",
}));

const SkillsContainer = ({ skills }) => {
  return (
    <StyledSkilledContainer>
      {skills?.languages?.map((skill) => (
        <StyledSkillsContainer>
          <Image src={skill?.icons} />
          <Title uppercase>{skill?.language_name}</Title>
        </StyledSkillsContainer>
      ))}
    </StyledSkilledContainer>
  );
};

export default SkillsContainer;
