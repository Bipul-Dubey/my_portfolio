import PropTypes from "prop-types";

export default function IconStyle({ src, height, width }) {
  return (
    <img
      src={src}
      alt=""
      style={{
        height: height,
        width: width,
      }}
    />
  );
}

IconStyle.propTypes = {
  src: PropTypes.any,
  height: PropTypes.string,
  width: PropTypes.string,
};

IconStyle.defaultProps = {
  height: "24px",
  width: "24px",
};
