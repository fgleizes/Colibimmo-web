import { useState, useContext } from "react"
import { Link, useHistory, Redirect } from "react-router-dom"
import { login } from "../../api/userAPI"
import { Button } from "../utilities/Button"
import { LoginForm } from "../utilities/Form"
import "./LoginView.css"

import { UserContext } from "../../user-context";

console.log(localStorage.getItem('userFirstname'))


const LoginView = () => {
  const contextUser= useContext(UserContext);
  const history = useHistory()
  // const [token, setToken] = useState('')
  const [isLoggin, setIsLoggin] = useState()

  const handleSubmit = (event, mail, password) => {
    event.preventDefault()
    login(mail,password).then(response => {
      if (response.status === 200) {
        setIsLoggin(true)
        contextUser.login(response.data.access_token, {firstname: localStorage.getItem('userFirstname'), lastname: localStorage.getItem('userLastname')})
        history.push("/profile")
      } 
      else {
        setIsLoggin(false)
      }
    })
  }

  console.log(contextUser)

  // if (isLoggin === true) {
  //   return <Redirect to="/home" />
  // }

  return (
    <div className="loginView">
      {isLoggin === false && <h2 className="error">Echec de la connexion ! Veuillez réessayer :</h2>}
      {isLoggin === undefined && <h2>Informations de connexion :</h2>}
      <LoginForm handleSubmit={handleSubmit}/>
      <p>Vous n'avez pas encore de compte?</p>
      <Link to="/register" title="Créer votre compte">
        <Button type="button">Inscription</Button>
      </Link>
    </div>
  );
}

export default LoginView;