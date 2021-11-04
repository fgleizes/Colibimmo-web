import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState, useContext, } from "react";
import { ConfirmModal } from './Modal';
import { UserContext } from "../../user-context";
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import "./Header.css";

const Header = () => {
  const contextUser = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const confirmLogout = () => {
    contextUser.logout()
    handleClose()
  }

  return (
    <header>
      <nav>
        <div className="logo"><Link to="/">ColibImmo</Link></div>
        <ul>
          <li>
            <Link to="/" className="menuLink icon"><AiFillHome /></Link>
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
        </ul>
        <div className="nav-right">
            {contextUser.isLoggedIn && 
              <>
                <Link to="/maSelection" title="Voir ma liste de sélection"><Button type="button" className="menuLink like"><AiOutlineHeart className="icon" /></Button></Link>
                <Link to="/profile">
                  <Button type="button" className="menuLink" title="Accéder à mon compte">
                    <CgProfile className="icon profile" /> {contextUser.user.firstname} {contextUser.user.lastname}
                  </Button>
                </Link>
              </>
            }
            {contextUser.isLoggedIn
              ? <Button type="button" title="Me déconnecter de mon compte" handleClick={handleShow} className="menuLink">Déconnexion</Button>
              : <Link to="/login" title="Me connecter à mon compte"><Button type="button" className="menuLink">Connexion</Button></Link>
            }
        </div>
      </nav>
      <ConfirmModal
        show={show}
        onConfirm={confirmLogout}
        handleClose={handleClose}
        centered
        title="Déconnexion"
        body="Etes-vous sûr(e) de vouloir vous déconnecter ?"
      />
    </header>
  );
}

export default Header;