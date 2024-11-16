import Logo from "./common/logo";
import GlowButton from "./glowbutton";

export default function Header() {
  return (
    <div
      style={{
        height: "75px",
        backgroundColor: "transparent",
        boxShadow: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 30px 60px -30px`,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      className="unselectable karla-font"
    >
      <Logo />
      <GlowButton>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <i className="fa fa-download"></i>
          {`Resume`}
        </span>
      </GlowButton>
    </div>
  );
}
