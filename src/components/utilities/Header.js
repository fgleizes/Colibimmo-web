import "./Header.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useContext, } from "react";
import { UserContext } from "../../user-context";
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
  const contextUser = useContext(UserContext);
  return (
    <header>
      <nav>
        <div className="logo"><Link to="/">ColibImmo</Link></div>
        <ul>
          <li>
            <Link to="/" className="menuLink"><AiFillHome /></Link>
          </li>
          <li>
            <Link to="/buy" className="menuLink">Acheter</Link>
          </li>
          <li>
            <Link to="/rent" className="menuLink">Louer</Link>
          </li>
          <li>
            <Link to="/estimate" className="menuLink">Estimer un bien</Link>
          </li>
          <li>
          {contextUser.isLoggedIn
            ? <Link to="/profile" className="menuLink">Profile</Link>
            : null
          }
          </li>
        </ul>
        <div className="nav-right">
          <Link to="/maSelection" title="Voir ma liste de sélection"><Button type="button" className="like"><AiOutlineHeart /></Button></Link>
          {contextUser.isLoggedIn
            ? <Link to="/logout" title="Me déconnecter de mon compte" onClick={contextUser.logout}><Button type="button">Déconnexion</Button></Link>
            : <Link to="/login" title="Me connecter à mon compte"><Button type="button">Connexion</Button></Link>
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;