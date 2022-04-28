import { useState, useContext } from "react"
import { Link, Redirect } from "react-router-dom"
import { login, getProfile } from "../../api/userAPI"
import { getFavorite } from "../../api/propertyAPI"
import { Button } from "../utilities/Button"
import { LoginForm } from "../utilities/Form"
import "./LoginView.css"

import { UserContext } from "../../user-context";

const LoginView = () => {
  const contextUser= useContext(UserContext);
  const [isLoggin, setIsLoggin] = useState()

  const handleSubmit = (event, mail, password) => {
    event.preventDefault()

    login(mail,password).then(response => {
      if (response && response.status === 200) {
        const token = response.data.access_token
        getProfile(token)
          .then(response => {
            if (response.status === 200) {
              contextUser.login(token, { id: response.data.id, firstname: response.data.firstname, lastname: response.data.lastname })
              setIsLoggin(true)
              getFavorite(token)
                .then(response => {
                  if (response.status === 200) {
                    contextUser.setFavorites(response.data)
                  }
                })
            }
          })
      } else {
        setIsLoggin(false)
      }
    })
    
  }

  if (isLoggin === true) {
    return <Redirect to="/profile" />
  }

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