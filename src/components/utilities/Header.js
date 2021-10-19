import "./Header.css";
import { Button } from "./Button";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo"><Link to="/">ColibImmo</Link></div>
        <ul>
          <li>
            <Link to="/" className="menuLink"><AiFillHome /></Link>
          </li>
          <li>
            <Link to="/acheter" className="menuLink">Acheter</Link>
          </li>
          <li>
            <Link to="/louer" className="menuLink">Louer</Link>
          </li>
          <li>
            <Link to="/estimer-un-bien" className="menuLink">Estimer un bien</Link>
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
          <Link to="/login" title="Me connecter à mon compte"><Button type="button">Connexion</Button></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;