import Logo from "./common/logo";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#8a73fb",
        padding: "2% 0% 4% 0%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Logo color={"#fff"} shortColor={"#fff"} />
    </div>
  );
}
