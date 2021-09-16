// import React from 'react'
import './Form.css'
import { useState } from "react"
import { Button } from './Button'
import { login } from '../../api/userAPI'


export const LoginForm = () => {
  const [token, setToken] = useState('')
  const [mail, setMail]= useState('')
  const [password, setPassword]= useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    login(mail,password).then(data => setToken(data))
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Saisissez votre email" name="mail" onChange={(event)=>setMail(event.target.value)}/>
      <input type="text" placeholder="Saisissez votre password"  name="password" onChange={(event)=>setPassword(event.target.value)} />
      <Button type="submit">SE CONNECTER</Button>
    </form>
  );
}