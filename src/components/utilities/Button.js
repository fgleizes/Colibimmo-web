import "./Button.css";

export const Button = (props) => {
  const { type, className, value} = props
  
  return (
    <button
      type={type}
      className={className}
    >
      {props.children}
      {value}
    </button>
  );
}