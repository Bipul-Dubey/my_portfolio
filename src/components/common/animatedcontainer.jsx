import { useId } from "react";
import { useElementInView } from "../../customhooks/intersectionobserver";
import PropTypes from "prop-types";

export default function AnimatedContainer({ children, style }) {
  const [targetRef, isInView] = useElementInView({ threshold: 0.2 });
  const uuid = useId();

  return (
    <div
      key={"AnimatedContainer" + uuid}
      ref={targetRef}
      className={`c-technical-skill pop-out-container ${
        isInView ? "in-view" : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
}

AnimatedContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
