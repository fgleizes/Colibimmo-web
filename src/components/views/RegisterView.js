import { useState } from "react"
import { Link } from "react-router-dom"
import { register } from "../../api/userAPI"
import { Button } from "../utilities/Button"
import { RegisterForm } from "../utilities/Form"
import "./RegisterView.css"

function RegisterView() {
  const [isRegister, setIsRegister] = useState()

  const handleSubmit = (event,user) => {
    event.preventDefault();
    register(user).then(response => {
      if (response.status === 201) {
        setIsRegister(true)
      } else {
        setIsRegister(false)
      }
    })
  }

  if (isRegister === true) {
    return (
      <div className="registerView">
        <h2>
          Votre inscription a bien été prise en compte !
        </h2>
        <p>Connectez-vous ici : </p>
        <Link to="/login" title="Me connecter à mon compte">
          <Button type="button">Connexion</Button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="registerView">
        { isRegister === false && <h2 className="error">Votre inscription n'a pas été prise en compte ! Veuillez réessayer :</h2> }
        { isRegister === undefined && <h2>Informations d'inscription :</h2> }
        <RegisterForm handleSubmit={handleSubmit}/>
        <p>Vous avez déjà un compte? Connectez-vous ici : </p>
        <Link to="/login" title="Créer votre compte">
          <Button type="button">Connexion</Button>
        </Link>
      </div>
    );
  }
}

export default RegisterView;