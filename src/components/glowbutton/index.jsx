import "./style.css";

function GlowButton({ children, onClick }) {
  return (
    <button
      className="glow-on-hover"
      type="button"
      style={{}}
      onClick={onClick}
    >
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
