import PropTypes from "prop-types";
import React from "react";

import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
