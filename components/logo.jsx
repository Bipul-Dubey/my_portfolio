import React from "react";
import styled from "styled-components";

const StyledLogoContainer = styled("div")(({ isShort }) => ({
  fontFamily: "Clicker Script, cursive",
  fontStyle: "normal",
  fontSize: "1.9rem",
  textTransform: "capitalize",
  fontWeight: "700",
  letterSpacing: "2px",
  textShadow: " 2px 5px 4px #aaf",
  width: isShort ? "100px" : "160px",
}));

const PersonalLogo = ({ isShort = false }) => {
  return (
    <StyledLogoContainer isShort={isShort}>
      {isShort ? "BD." : "Bipul Dubey."}
    </StyledLogoContainer>
  );
};

export default PersonalLogo;
