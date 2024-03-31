import React from "react";
import styled, { css, keyframes } from "styled-components";
import { CircularButton } from "./buttons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import {
  handleOpenLink,
  handleOpenMailbox,
  handlePhoneCall,
} from "@/common/utils";
import { EMAIL, GITHUB, LINKEDIN, PHONE } from "@/common/constant";
import { Title } from "./commonComponents";

const StyledMainContainer = styled("div")(({}) => ({
  background:
    "linear-gradient(to right bottom, #8facd8, #9ac5e6, #a0daf3, #b5e6f2, #b6fbff)",
  minHeight: "100vh",
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 768px)": {
    flexWrap: "wrap",
  },
}));

const StyledContainer = styled("div")(({}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 768px)": {
    height: "90%",
  },
}));

const StyledInfoContainer = styled("div")(({}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "7px",
}));

const animate = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 40% 70% / 40% 50% 30% 60%;
  }
`;

const StyledImageContainer = styled("div")(
  ({}) =>
    css`
      background: url("/assets/bipul.jpg");
      width: 350px;
      height: 350px;
      background-size: cover;
      background-position: center center;
      animation: ${animate} 5s ease-in-out infinite;
      transition: all 1s ease-in-out;
      box-shadow: 0px 0px 4px 4px rgba(154, 153, 153, 0.4);
      background-repeat: no-repeat;
      transform: scaleX(-1);
      @media (max-width: 768px) {
        width: 200px;
        height: 200px;
        transform: scaleX(1);
      }
    `
);

const StyledIconContainer = styled("div")(({}) => ({
  display: "flex",
  gap: "17px",
  marginTop: "17px",
  "@media (max-width: 768px)": {
    display: "none",
  },
}));

const MainPage = () => {
  return (
    <StyledMainContainer id="main-section">
      <StyledInfoContainer>
        <Title uppercase type="p" color="#fff">
          Let's Build Something Together
        </Title>
        <Title type="h1" color="#000" center fontType="2">
          Hi, I'm{" "}
          <Title inline color="#060de5" type="h1">
            Bipul Dubey
          </Title>
          .
        </Title>
        <Title type="h3" color="#000" center fontType="2">
          Associate Developer!
        </Title>
        <Title
          center
          padding="0px 2rem"
          color="#fff"
          fontType="2"
          style={{ lineHeight: "17px" }}
        >
          I'm front-end developer specializing in building (occasionally
          designing) digital experiences. Currently, I'm focused on building
          frontend applications while learning back-end technologies.
        </Title>
        <StyledIconContainer>
          <CircularButton
            medium
            onClick={() => {
              handleOpenLink(LINKEDIN);
            }}
          >
            <FaLinkedinIn />
          </CircularButton>
          <CircularButton
            medium
            onClick={() => {
              handleOpenLink(GITHUB);
            }}
          >
            <FaGithub />
          </CircularButton>
          <CircularButton
            medium
            onClick={() => {
              handleOpenMailbox(EMAIL);
            }}
          >
            <AiOutlineMail />
          </CircularButton>
          <CircularButton
            medium
            onClick={() => {
              handlePhoneCall(PHONE);
            }}
          >
            <BsPhoneVibrate />
          </CircularButton>
        </StyledIconContainer>
      </StyledInfoContainer>
      <StyledContainer>
        <StyledImageContainer />
      </StyledContainer>
    </StyledMainContainer>
  );
};

export default MainPage;
