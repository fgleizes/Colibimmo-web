import './Button.css'

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



