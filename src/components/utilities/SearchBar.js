import { useState, useEffect } from "react"
import { useLocation, useHistory, useRouteMatch } from "react-router-dom"
import { Button } from "../utilities/Button"
import "./searchBar.css"

const SearchBar = (props) =>{
   const { numberOfResults} = props
   const [searchTherm, setSearchTherm] = useState('')
   const location = useLocation();
   const history = useHistory();
   const match = useRouteMatch(location.pathname);

   useEffect(() => {
      if(location.search) {
         setSearchTherm(location.search.slice(location.search.indexOf('=')+1))
      }
   }, [location.search])

   const handleSubmit = (e) => {
      e.preventDefault()
      const newURL = match.url + (searchTherm && '?search=' + searchTherm)
      history.push(newURL);
   }

   const handleSearch = (e) => {
      setSearchTherm(e.target.value)
   }
   
   return(
      <div>
         <form className="searchBar" onSubmit={handleSubmit}>
            <input type='search' placeholder="Rechercher par ville ou par code postal" value={searchTherm} onChange={handleSearch} />
            <Button type="submit">Rechercher</Button>
         </form>
         <p>nombre de résultats: {numberOfResults}</p>
      </div>
   );
}

export default SearchBar