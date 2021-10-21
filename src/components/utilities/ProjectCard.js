import '../utilities/Button.css'
import { Button } from "../utilities/Button"
import {  AiOutlineHeart,AiOutlineCheck } from 'react-icons/ai';
const ProjectCard = (props) => {
const {itemProject} = props
return(
<div className="propertyCard">
    <img className="imgPropertyThumbnail" alt="du bien" src="https://www.trecobat.fr/wp-content/uploads/2020/04/construction-maison-neuve-trecobat-ille-et-vilaine-2.jpg"/>
    <div className="rightCard">
        <div className="listDescProperty">
            <h2 className="price">{itemProject.price} €</h2>
            <p className="typeProperty">{itemProject.id_Type_project}</p>
            <div className="detailsProperty">
                <p className="nbRoom">3 pieces / </p>
                <p className="nbBedRoom">2 chambres / </p>
                <p className="area">{itemProject.area} m²</p>
            </div>
            <p className="shortDesc">{itemProject.short_description}</p>
        </div>
        <div className="boutonsCard">
            <Button type="buttonListLike" className="like"><AiOutlineHeart /></Button>
            <Button type="buttonListCheck" className="like"><AiOutlineCheck /></Button>
        </div>
    </div>
</div>
)
}

export default ProjectCard