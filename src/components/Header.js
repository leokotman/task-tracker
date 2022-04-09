import PropTypes from "prop-types";
import React from "react";

import Button from "./Button";

const Header = ({ title, onClickAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "firebrick" : "darkgreen"} onClick={onClickAdd}/>
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
