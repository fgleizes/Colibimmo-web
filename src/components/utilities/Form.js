// import React from 'react'
import "./Form.css"
import React, { useEffect, useState } from "react"
import { Button } from "./Button"
import { login, logout, getProfil } from "../../api/userAPI"

export const LoginForm = () => {
  const [token, setToken] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = (event) => {
    event.preventDefault()
    login(mail, password).then(data => setToken(data))
    // getProfil(token).then(data => data)
    // logout(token).then(data=>data)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Saisissez votre email" name="mail" onChange={(event) => setMail(event.target.value)} />
        <input type="text" placeholder="Saisissez votre password" name="password" onChange={(event) => setPassword(event.target.value)} />
        <Button type="submit">SE CONNECTER</Button>
      </form>
    </>
  );
}



export const RegisterForm = (props) => {
  const { handleSubmit } = props
  const [user, setUser] = useState({})

  return (
    <form onSubmit={(e) => handleSubmit(e, user)}>
      <input type="text" name="lastname" placeholder="Nom" onChange={(event) => setUser({ ...user, lastname: event.target.value })} />
      <input type="text" name="firstname" placeholder="Prénom" onChange={(event) => setUser({ ...user, firstname: event.target.value })} />
      <input type="text" name="phone" placeholder="Numéro de téléphone" onChange={(event) => setUser({ ...user, phone: event.target.value })} />
      <input type="text" name="mail" placeholder="Adresse mail" onChange={(event) => setUser({ ...user, mail: event.target.value })} />
      <input type="text" name="mdp" placeholder="Mot de passe" onChange={(event) => setUser({ ...user, password: event.target.value })} />
      <Button type="submit">INSCRIPTION</Button>
    </form>
  );
}



