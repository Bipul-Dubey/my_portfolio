import { SITE_DETAILS } from "../constants/siteconstants";
import Logo from "./common/logo";
import GlowButton from "./glowbutton";

const handleDownload = () => {
  // Create a temporary <a> element for downloading
  const link = document.createElement("a");
  link.href = SITE_DETAILS.RESUME_URL;
  link.download = `${SITE_DETAILS.NAME}.pdf`.replaceAll(" ", "_"); // File name when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up after the click
};

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
      {/* <GlowButton onClick={handleDownload}>
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
      </GlowButton> */}
      <GlowButton>Let's Connect</GlowButton>
    </div>
  );
}
