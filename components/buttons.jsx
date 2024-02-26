import React from "react";
import styled from "styled-components";

const StyledCircularButton = styled("div")(({ width, height }) => ({
  height: height,
  width: width,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "9999px",
  padding: "0.5rem",
  marginLeft: "0.2rem",
  cursor: "pointer",
  boxShadow:
    "0px 0px 4px 4px rgba(154, 153, 153, 0.4), inset 2px 2px 2px 4px rgba(244, 238, 238, 0.4)",
  "&:hover": {
    fontSize: "1.3rem",
    transition: "0.4s ease-in-out",
  },
}));

export const CircularButton = ({
  children,
  onClick = () => {},
  width = "40px",
  height = "40px",
}) => {
  return (
    <StyledCircularButton onClick={onClick} width={width} height={height}>
      {children ? children : ""}
    </StyledCircularButton>
  );
};
