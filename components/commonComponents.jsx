import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)(({ marginleft = "" }) => ({
  display: "flex",
  width: "fit-content",
  marginLeft: marginleft,
}));

export const StyledList = styled("li")(
  ({ marginleft = "", paddingtop = "" }) => ({
    textDecoration: "none",
    listStyle: "none",
    fontSize: "1.05rem",
    textTransform: "uppercase",
    marginLeft: marginleft,
    paddingTop: paddingtop,
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#7d7b7b",
      transition: "text-decoration-color 0.5s ease-in-out",
    },
  })
);

export const LinkButton = ({
  text = "",
  href = "/",
  marginleft,
  paddingtop,
  onClick = () => {},
}) => {
  return (
    <StyledLink href={href} onClick={onClick} marginleft={marginleft}>
      <StyledList paddingtop={paddingtop}>{text}</StyledList>
    </StyledLink>
  );
};

export const StyledHorizontalLine = styled("hr")(({}) => ({
  width: "100%",
  height: "0.1rem",
  backgroundColor: "gray",
  boxShadow: "0px 1px 1px 1px rgba(168, 168, 168, 0.5)",
}));

// used for text
export const Title = styled("div")(
  ({
    type = "",
    fontType,
    color = "#000",
    center,
    inline,
    uppercase,
    capitalize,
    padding = "",
  }) => ({
    display: inline ? "inline" : "",
    fontSize:
      type == "h1"
        ? "3rem"
        : type == "h2"
        ? "2.5rem"
        : type == "h3"
        ? "2rem"
        : type == "h4"
        ? "1.3rem"
        : type == "h5"
        ? "1.2rem"
        : type == "p"
        ? "1.1rem"
        : "",
    padding: padding,
    color: color,
    textAlign: center ? "center" : "",
    textTransform: uppercase ? "uppercase" : capitalize ? "capitalize" : "",
    fontFamily:
      fontType == 1
        ? "Roboto Slab, serif"
        : fontType == 2
        ? "League Spartan, sans-serif"
        : fontType == 3
        ? "Lato, sans-serif"
        : "",
  })
);

// container for sections except main
export const StyledSectionContainer = styled("div")(({ bgcolor = "" }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  paddingTop: "3.8rem",
  backgroundColor: bgcolor,
}));
