import "./Button.css";

function Button(props) {
  const {value, type} = props;
  console.log(type)

  return <button className={type}>{value}</button>;
}

export default Button;
