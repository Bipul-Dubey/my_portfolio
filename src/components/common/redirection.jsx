import PropTypes from "prop-types";

export default function Redirection({ href, children, style }) {
  return (
    <a
      style={{
        backgroundColor: "#EAF5FE",
        color: "#3C65D0",
        padding: "1px 6px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "18px",
        fontWeight: 400,
        border: "none",
        textDecoration: "none",
        cursor: "pointer",
        ...style,
      }}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

Redirection.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
};
