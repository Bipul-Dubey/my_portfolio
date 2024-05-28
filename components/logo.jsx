import { INFO } from "@/common/constant";
import React from "react";
import styled from "styled-components";

const StyledLogoContainer = styled("div")(({ isShort, isNotScrolled }) => ({
  fontFamily: "Clicker Script, cursiveS",
  fontStyle: "normal",
  fontSize: "1.9rem",
  textTransform: "capitalize",
  fontWeight: "700",
  letterSpacing: "2px",
  textShadow: isNotScrolled ? "2px 5px 4px #ffffff" : "2px 5px 4px #aaf",
  width: isShort ? "100px" : "160px",
  minWidth: "fit-content",
}));

const PersonalLogo = ({ isShort = false, isNotScrolled = false }) => {
  return (
    <StyledLogoContainer isShort={isShort} isNotScrolled={isNotScrolled}>
      {isShort ? "BD." : INFO.personalDetails.name + "."}
    </StyledLogoContainer>
  );
};

export default PersonalLogo;
