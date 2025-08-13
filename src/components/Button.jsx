import "./Button.css";

function Button(props) {
  const {value, type} = props;

  return <button className={type}>{value}</button>;
}

export default Button;
