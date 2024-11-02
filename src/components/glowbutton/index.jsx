import "./style.css";

function GlowButton({ children }) {
  return (
    <button className="glow-on-hover" type="button" style={{}}>
      <span
        style={{
          fontSize: "1.1rem",
        }}
      >
        {children}
      </span>
    </button>
  );
}

export default GlowButton;
