import PropTypes from "prop-types";
import React from "react";

import Button from "./Button";

const Header = ({ title }) => {
  const click = () => {
    console.log('click');
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" color="blue" onClick={click}/>
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
