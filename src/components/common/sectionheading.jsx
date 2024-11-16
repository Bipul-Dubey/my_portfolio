import PropTypes from "prop-types";

export default function SectionHeading({ heading = "Section Heading" }) {
  return <h2 className="unselectable">{heading}</h2>;
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
};
