import './Form.css'
import { login, register } from '../../api/userAPI'
import { Component, useEffect, useState } from "react"
import {ButtonLog} from './Button'
import {ButtonRegister} from './Button'


export const LoginForm = () => {

    const [token, setToken] = useState('')
    const [email, setEmail]= useState('')
    const [mdp, setMdp]= useState('')
    const handleSubmit = (event) => {
      event.preventDefault();
     login(email,mdp)
     .then(data => setToken(data) )
      
    }
  
  return (
      
      <div className="container">
      <div className="registerBloc">
      <p>{email}</p>
      <p>{mdp}</p>
      <p>{token}</p>
      
       <form onSubmit={handleSubmit}>
            <label className="email">
                <p>email</p>
                <input type="text" name="email" onChange={(event)=>setEmail(event.target.value)}/>
            </label>
            <label className="mdp">
                <p>mot de passe :</p>
                <input type="text" name="mdp"  onChange={(event)=>setMdp(event.target.value)} />
            </label>
            
            <ButtonLog />
           
        </form>
      </div>
      <div className="registration">
      <p>Vous n'avez pas encore de compte?</p>
            <ButtonRegister />
      </div>
      </div>
  );

}


export const RegisterForm = () => {

  const [lastname, setLastname]= useState('')
  const [firstname, setFirstname]= useState('')
  const [phone, setPhone]= useState('')
  const [mail, setMail]= useState('')
  const [password, setPassword]= useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
        lastname: lastname,
        firstname: firstname,
        phone: phone,
        mail: mail,
        password: password,
      };


   register(user)
    
  }

return (
    
    <div className="container">
    <div className="registerBloc">
    <p>{lastname}</p>
    <p>{firstname}</p>
    <p>{phone}</p>
    <p>{mail}</p>
    <p>{password}</p>
    
     <form onSubmit={handleSubmit}>
          <label className="lastname">
              <p>Nom</p>
              <input type="text" name="lastname" onChange={(event)=>setLastname(event.target.value)}/>
          </label>
          <label className="firstname">
              <p>Prénom</p>
              <input type="text" name="firstname" onChange={(event)=>setFirstname(event.target.value)}/>
          </label>
          <label className="phone">
              <p>Téléphone</p>
              <input type="text" name="phone" onChange={(event)=>setPhone(event.target.value)}/>
          </label>
          <label className="mail">
              <p>email</p>
              <input type="text" name="mail" onChange={(event)=>setMail(event.target.value)}/>
          </label>
          <label className="password">
              <p>mot de passe :</p>
              <input type="text" name="mdp"  onChange={(event)=>setPassword(event.target.value)} />
          </label>
          
          <ButtonRegister/>
         
      </form>
    </div>
    </div>
);

}