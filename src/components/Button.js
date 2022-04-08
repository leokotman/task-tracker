const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add",
  color: "steelblue",
}

export default Button;
