import "./Header.css";
import { Button } from "./Button";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { useState, useContext, } from "react";
import ConfirmModal from './Modal';
import { UserContext } from "../../user-context";
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
  const contextUser = useContext(UserContext);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
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
            {contextUser.isLoggedIn && <Link to="/profile" className="menuLink">Profile</Link>}
          </li>
          <li>
            <Link to="/voir un bien" className="menuLink">Voir un bien</Link>
          </li>
        </ul>
        
        <div className="nav-right">
          <div className="searchBar">
            <SearchBar></SearchBar><Button type="submitSearch" ><AiOutlineSearch /></Button>
          </div>
          <Link to="/maSelection" title="Voir ma liste de sélection"><Button type="button" className="like"><AiOutlineHeart /></Button></Link>
          {contextUser.isLoggedIn
            // ? <Link to="/logout" title="Me déconnecter de mon compte" onClick={contextUser.logout}><Button type="button">Déconnexion</Button></Link>
            ? <Link to="/logout" title="Me déconnecter de mon compte" onClick={openModal}><Button type="button">Déconnexion</Button></Link>
            : <Link to="/login" title="Me connecter à mon compte"><Button type="button">Connexion</Button></Link>
          }

          <ConfirmModal></ConfirmModal>
        </div>
      </nav>
    </header>
  );
}

export default Header;