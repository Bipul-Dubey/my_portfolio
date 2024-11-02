import { lazy } from "react";
import { Loadable } from "./components/common/Loadable";
import Header from "./components/header";
import Main from "./components/main";

const ParticleBackground = Loadable(
  lazy(() => import("./components/particlesbackground"))
);

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main />
      <ParticleBackground />
    </div>
  );
}

export default App;
