import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { CircularButton } from "./buttons";
import PersonalLogo from "./logo";
import { LinkButton, StyledHorizontalLine, Title } from "./commonComponents";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPhoneVibrate } from "react-icons/bs";
import {
  handleOpenLink,
  handleOpenMailbox,
  handlePhoneCall,
} from "@/common/utils";
import { INFO } from "@/common/constant";

const StyledMainLeftBar = styled("div")(({ isMenuOpen = false }) => ({
  backgroundColor: "rgba(173, 173, 173, 0.5)",
  position: "fixed",
  left: isMenuOpen ? 0 : "-100%",
  top: 0,
  width: "100%",
  height: "100vh",
  "@media (min-width: 768px)": {
    display: "none",
  },
}));

const StyledLeftbar = styled("div")(({ isMenuOpen = false }) => ({
  backgroundColor: "#ecf0f3",
  position: "fixed",
  height: "100vh",
  left: isMenuOpen ? 0 : "-100%",
  top: 0,
  padding: "2.5rem;",
  boxShadow: "7px 0px 8px rgba(172, 172, 172, 1)",
  transition: "0.7s ease-in-out",
  "@media (max-width: 768px)": {
    width: "60%",
    overflow: "auto",
  },
  "@media (max-width: 640x)": {
    width: "45%",
  },
}));

const StyledLefbarContent = styled("div")(({}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledNavigationContainer = styled("div")(({}) => ({
  paddingTop: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledNavbarList = styled("ul")(({}) => ({
  margin: 0,
  padding: 0,
}));

const StyledContactContainer = styled("div")(({}) => ({
  paddingTop: "50%",
  marginBottom: "30px",
}));

const StyledContactButtonContainer = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "1rem",
  flexWrap: "wrap",
  "@media (max-width: 640px)": {
    width: "90%",
    gap: "0.9rem",
  },
}));

const Leftbarmenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const leftbarRef = useRef(null);

  const handleOutSideLefbar = (e) => {
    if (leftbarRef.current && !leftbarRef.current.contains(e.target)) {
      setIsMenuOpen();
    }
  };

  return (
    <StyledMainLeftBar isMenuOpen={isMenuOpen} onClick={handleOutSideLefbar}>
      <StyledLeftbar isMenuOpen={isMenuOpen} ref={leftbarRef}>
        <div>
          <StyledLefbarContent>
            <PersonalLogo />
            {/* <CircularButton onClick={setIsMenuOpen}>
              <AiOutlineClose />
            </CircularButton> */}
          </StyledLefbarContent>
          <Title fontType="2" type="p">
            {INFO.personalDetails.shortGreet}
          </Title>
          <StyledHorizontalLine />
        </div>
        <StyledNavigationContainer>
          <StyledNavbarList>
            <LinkButton
              text="Home"
              href="/"
              paddingtop="1rem"
              onClick={setIsMenuOpen}
            />
            <LinkButton
              text="Skills"
              href="#skills"
              paddingtop="1rem"
              onClick={setIsMenuOpen}
            />
            <LinkButton
              text="Work"
              href="#works"
              paddingtop="1rem"
              onClick={setIsMenuOpen}
            />
            <LinkButton
              text="Projects"
              href="#projects"
              paddingtop="1rem"
              onClick={setIsMenuOpen}
            />
            {/*
            <LinkButton
              text="Contact"
              href="#contact"
              paddingtop="1rem"
              onClick={setIsMenuOpen}
            /> */}
          </StyledNavbarList>
          <StyledContactContainer>
            <Title style={{ color: "#5651e5" }} fontType="2" type="h4">
              Let's Connect...
            </Title>
            <StyledContactButtonContainer>
              <CircularButton
                onClick={() => {
                  handleOpenLink(INFO.links.linkedin);
                }}
              >
                <FaLinkedinIn />
              </CircularButton>
              <CircularButton
                onClick={() => {
                  handleOpenLink(INFO.links.github);
                }}
              >
                <FaGithub />
              </CircularButton>
              <CircularButton
                onClick={() => {
                  handleOpenMailbox(INFO.links.email);
                }}
              >
                <AiOutlineMail />
              </CircularButton>
              <CircularButton
                onClick={() => {
                  handlePhoneCall(INFO.links.phone);
                }}
              >
                <BsPhoneVibrate />
              </CircularButton>
            </StyledContactButtonContainer>
          </StyledContactContainer>
        </StyledNavigationContainer>
      </StyledLeftbar>
    </StyledMainLeftBar>
  );
};

export default Leftbarmenu;
