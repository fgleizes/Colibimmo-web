import './Form.css'
import { login } from '../../api/userAPI'
import { Component, useEffect, useState } from "react"
import {ButtonLog} from './Button'
import {ButtonRegister} from './Button'
import React from 'react'


const LoginForm = () => {

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
            
            <ButtonLog value="SE CONNECTER"/>
           
        </form>
      </div>
      <div className="registration">
      <p>Vous n'avez pas encore de compte?</p>
            <ButtonRegister value="S'INCRIRE"/>
      </div>
      </div>
  );

}


export default LoginForm;