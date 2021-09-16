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

export const ButtonLog = (props) => {
  return (
    <input className="submitLog" type="submit" value={props.value} />
  );
}
 

export const ButtonRegister = (props) => {
  return (
    <input className="RegistrationButton" type="button" value={props.value}/>
  );
}
