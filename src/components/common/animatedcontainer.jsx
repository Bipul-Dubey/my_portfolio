import { useId } from "react";
import { useElementInView } from "../../customhooks/intersectionobserver";
import PropTypes from "prop-types";

export default function AnimatedContainer({
  children,
  style,
  className,
  classNameInView,
}) {
  const [targetRef, isInView] = useElementInView({ threshold: 0.2 });
  const uuid = useId();

  return (
    <div
      key={"AnimatedContainer" + uuid}
      ref={targetRef}
      className={`${className ? className : ""} ${
        classNameInView && isInView ? classNameInView : ""
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
  className: PropTypes.string,
  classNameInView: PropTypes.string,
};
