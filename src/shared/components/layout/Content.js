import PropTypes from "prop-types";

const Content = (props) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
