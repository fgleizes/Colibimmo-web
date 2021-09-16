import { Link } from "react-router-dom"
import { Button } from "../utilities/Button"
import { LoginForm } from "../utilities/Form"
import "./LoginView.css"

const LoginView = () => {
  
  return (
    <div className="loginView">
      <LoginForm />
      <p>Vous n'avez pas encore de compte?</p>
      <Link to="/register" title="Créer votre compte">
        <Button type="button">S'INCRIRE</Button>
      </Link>
    </div>
  );
}

export default LoginView;