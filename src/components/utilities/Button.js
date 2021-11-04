import "./Button.css";

export const Button = (props) => {
  const { type, className, value, handleClick, title} = props
  
  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      title={title}
    >
      {props.children}
      {value}
    </button>
  );
}