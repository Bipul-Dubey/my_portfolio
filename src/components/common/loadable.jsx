import { Suspense } from "react";
import LoadingScreen from "./loader/loadingscreen";

export function Loadable(Component) {
  return function LoadableComponent(props) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
