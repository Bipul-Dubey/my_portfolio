import "./style.css";

export default function LoadingScreen() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader"></div>{" "}
    </div>
  );
}
