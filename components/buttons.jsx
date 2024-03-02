import React from "react";
import styled from "styled-components";

const StyledCircularButton = styled("a")(
  ({ medium = false, large = false }) => ({
    height: medium ? "45px" : large ? "50px" : "40px",
    width: medium ? "45px" : large ? "50px" : "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "9999px",
    padding: "0.5rem",
    marginLeft: "0.2rem",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    boxShadow:
      "0px 0px 4px 4px rgba(154, 153, 153, 0.4), inset 2px 2px 2px 4px rgba(244, 238, 238, 0.4)",
    "&:hover": {
      fontSize: "1.3rem",
      transition: "0.4s ease-in-out",
    },
  })
);

export const CircularButton = ({
  children,
  onClick = () => {},
  medium = false,
  large = false,
}) => {
  return (
    <StyledCircularButton onClick={onClick} medium={medium} large={large}>
      {children ? children : ""}
    </StyledCircularButton>
  );
};
