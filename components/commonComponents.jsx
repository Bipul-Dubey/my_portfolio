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
