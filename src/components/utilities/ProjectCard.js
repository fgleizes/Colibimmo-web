import { useContext } from "react"
import { UserContext } from "../../user-context"
import { addFavorite, deleteFavorite } from "../../api/propertyAPI"
import { Link } from "react-router-dom";
import { Button } from "../utilities/Button"
import {  AiOutlineHeart,AiOutlineCheck } from 'react-icons/ai';
import '../utilities/Button.css'
 
const ProjectCard = (props) => {
    const {itemProject} = props
    const contextUser = useContext(UserContext)
    const numberOfBedroom = itemProject.room_project.filter(room => room.name === "chambre").length
    const numberOfRoom = itemProject.room_project.filter(room => room.name !== "salle de bains" && room.name !== "cuisine").length

    const formatDate = (dateToFormat) => {
        let date = new Date(dateToFormat)
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        let month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
        let year = date.getFullYear()
        return `${day}/${month}/${year}`;
    }
    
    const handleFavorite = () => {
        const myFavorites = JSON.parse(localStorage.getItem("favorites"));

        if (myFavorites.find(favorite => favorite.id_Project === itemProject.id)) {
            deleteFavorite(myFavorites.find(favorite => favorite.id_Project === itemProject.id).id, contextUser.token)
                .then(response => {
                    if (response.status === 200) {
                        
                        const myNewFavorites = myFavorites.filter((item) => item.id_Project !== itemProject.id);
                        localStorage.setItem("favorites", JSON.stringify(myNewFavorites))
                        contextUser.setFavorite(JSON.parse(localStorage.getItem("favorites")))
                    } 
                })
        } else {
            addFavorite(itemProject.id, contextUser.token)
                .then(response => {
                    if(response.status === 201) {
                        localStorage.setItem("favorites", JSON.stringify([...myFavorites, response.data.data]))
                        contextUser.setFavorite(JSON.parse(localStorage.getItem("favorites")))
                    } 
                })
        }
    }

    return(
        <div className="propertyCard">
            <img className="imgPropertyThumbnail" alt="du bien" src="https://www.trecobat.fr/wp-content/uploads/2020/04/construction-maison-neuve-trecobat-ille-et-vilaine-2.jpg"/>
            <div className="rightCard">
                <div className="listDescProperty">
                    <h2 className="price">{new Intl.NumberFormat().format(itemProject.price)} €{itemProject.id_Type_project.name === "location" && "/mois"}</h2>
                    <p className="typeProperty">{itemProject.id_Type_project.name === "Vente" ? "A vendre" : "A louer" }</p>
                    <p className="location">{itemProject.id_Address.city.zip_code && itemProject.id_Address.city.zip_code} {itemProject.id_Address.city.name && itemProject.id_Address.city.name}</p>
                    <div className="detailsProperty">
                        <p className="nbRoom">{numberOfRoom} pièce{numberOfRoom > 1 && "s"} / </p>
                        <p className="nbBedRoom">{numberOfBedroom} chambre{numberOfBedroom > 1 && "s"} / </p>
                        <p className="area">{itemProject.area} m²</p>
                    </div>
                    <p className="shortDesc">{itemProject.short_description}</p>
                    <p className="date">Le {formatDate(itemProject.updated_at)}</p>
                </div>
                <div className="boutonsCard">
                    {contextUser.isLoggedIn && 
                        <Button 
                            type="buttonListLike" 
                            title="Ajouter aux favoris" 
                            className={contextUser.favorites.map(e => e.id_Project).indexOf(itemProject.id) !== -1 ? "like liked" : "like"}
                            handleClick={() => handleFavorite()}
                        >
                            <AiOutlineHeart />
                        </Button>
                    }
                    <Link to={`/property/${itemProject.id}`}>
                        <Button type="buttonListCheck" className="like"><AiOutlineCheck /></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard