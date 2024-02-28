import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import PersonalLogo from "./logo";
import Leftbarmenu from "./leftbarmenu";
import { LinkButton } from "./commonComponents";

const StyledMainNavbarContainer = styled("div")(({ isScrolled = false }) => ({
  backgroundColor: isScrolled ? "#ecf0f3" : "transparent",
  position: "fixed",
  width: "100%",
  height: "60px",
  boxShadow: isScrolled
    ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
    : "0 5px 5px -4px rgb(0 0 0 / 0.1)",
  zIndex: "10000",
}));

const StyledNavbarContainer = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "8px 10px",
}));

const StyledNavigationList = styled("ul")(({}) => ({
  display: "flex",
  "@media (max-width: 768px)": {
    display: "none",
  },
}));

const StyledMenuButton = styled(AiOutlineMenu)(({}) => ({
  fontSize: "25px",
  textAlign: "center",
  marginRight: "7%",
  cursor: "pointer",
  "@media (min-width: 768px)": {
    display: "none",
  },
}));

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLeftbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledMainNavbarContainer isScrolled={scrolled}>
      <StyledNavbarContainer>
        <PersonalLogo />
        <StyledNavigationList>
          <LinkButton text="Home" href="/" marginleft="2.5rem" />
          <LinkButton text="Skills" href="/" marginleft="2.3rem" />
          <LinkButton text="Projects" href="/" marginleft="2.3rem" />
          <LinkButton text="Work" href="/" marginleft="2.3rem" />
          <LinkButton text="Contact" href="/" marginleft="2.3rem" />
        </StyledNavigationList>
        <StyledMenuButton onClick={handleLeftbar} />
      </StyledNavbarContainer>
      {/* mobile menu */}
      <Leftbarmenu isMenuOpen={isMenuOpen} setIsMenuOpen={handleLeftbar} />
    </StyledMainNavbarContainer>
  );
};

export default Navbar;
