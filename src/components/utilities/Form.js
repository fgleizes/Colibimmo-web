import "./Form.css"
import { useState } from "react"
import { Button } from "./Button"
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export const LoginForm = props => {
  const {handleSubmit} = props
  const [mail, setMail]= useState('')
  const [password, setPassword]= useState('')
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    const inputPassword = document.getElementById("password")
    if (inputPassword.type === "password") {
      inputPassword.type = "text"
      setShowPassword(true)
    } else {
      inputPassword.type = "password"
      setShowPassword(false)
    }
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e, mail, password)}>
      <input type="email" placeholder="Saisissez votre email" name="mail" onChange={(event)=>setMail(event.target.value)} required />
      <div className="container-password">
        <input type="password" id="password" placeholder="Saisissez votre password" name="password" onChange={(event) => setPassword(event.target.value)} required />
        {showPassword ? <BsEyeSlash onClick={togglePassword} /> : <BsEye onClick={togglePassword} />}
      </div>
      <Button type="submit">SE CONNECTER</Button>
    </form>
  );
}

export const RegisterForm = props => {
  const {handleSubmit} = props
  const [user, setUser] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    const inputPassword = document.getElementById("password")
    if (inputPassword.type === "password") {
      inputPassword.type = "text"
      setShowPassword(true)
    } else {
      inputPassword.type = "password"
      setShowPassword(false)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, user)}>
      <input type="text" name="lastname" placeholder="Nom" onChange={(event) => setUser({ ...user, lastname: event.target.value })} required />
      <input type="text" name="firstname" placeholder="Prénom" onChange={(event) => setUser({ ...user, firstname: event.target.value })} required />
      <input type="tel" pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$" minLength="10" maxLength="10" name="phone" placeholder="Numéro de téléphone" onChange={(event) => setUser({ ...user, phone: event.target.value })} />
      <input type="email" name="mail" placeholder="Adresse mail" onChange={(event) => setUser({ ...user, mail: event.target.value })} required />
      <div className="container-password">
        <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={(event) => setUser({ ...user, password: event.target.value })} required />
        {showPassword ? <BsEyeSlash onClick={togglePassword} /> : <BsEye onClick={togglePassword} />}
      </div>
      <Button type="submit">INSCRIPTION</Button>
    </form>
  );
}

export const Form = props => {
  const {inputs, handleSubmit} = props
  const [formContent, setFormContent] = useState({})

  const handleChange = (event, inputName) => {
    const objectForm = { ...formContent }
    Object.defineProperty(objectForm, inputName, {
      value: event.target.value,
      // writable: true,
      enumerable: true,
      // configurable: true
    })
    setFormContent(objectForm)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, formContent)}>
      {/* <input type="text" name="lastname" placeholder="Nom" onChange={(event) => setUser({ ...user, lastname: event.target.value })} required /> */}
      {inputs.map((input, index) => input.type === "textarea" 
        // ? <textarea name={input.name} placeholder={input.placeholder} required={input.required} onChange={(event) => setFormContent({ ...formContent, `${event.target.name}` : event.target.value })}></textarea>
        ? <textarea 
            name={input.name} 
            placeholder={input.placeholder} 
            required={input.required} 
            key={index} 
            onChange={(e) => handleChange(e, input.name)}
          ></textarea>
        : <input 
            type={input.type} 
            name={input.name} 
            placeholder={input.placeholder} 
            required={input.required} 
            pattern={input.pattern} 
            minLength={input.minLength} 
            maxLength={input.maxLength} 
            key={index} 
            onChange={(e) => handleChange(e, input.name)}
          ></input>
      )}
      {props.children}
    </form>
  )
}