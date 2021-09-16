import "./Button.css";

export const Button = (props) => {
  const { type, className, content} = props
  
  return (
    <button
      type={type}
      className={className}
    >
      {props.children}
      {content}
    </button>
  );
}