import OptionProperty from '../utilities/OptionProperty';

function ListInfoProperty(props) {
    const {resProject} = props
    const numberOfBedroom = resProject.room_project.filter(room => room.name === "chambre").length;
    const numberOfRoom = resProject.room_project.filter(room => room.name !== "salle de bains" && room.name !== "cuisine").length;

    return (
        <div className="descProperty">
            <ul>
                <li><h2>{resProject.type_Project.name === "vente" ? "A vendre" : "A louer"}</h2></li>
                <li><strong>Référence : {resProject.reference}</strong></li>
                <li>{numberOfRoom} PIECE{numberOfRoom > 1 && "S"} : {numberOfBedroom} CHAMBRE{numberOfBedroom > 1 && "S"}</li>
                <hr />
                <li><h3>Détails : </h3></li>
                <li>Prix : {resProject.price} €</li>
                <li>Surface : {resProject.area} m²</li>
                <li>Ville : {resProject.id_Address.City.zip_code} {resProject.id_Address.City.name}</li>
                <li>Description : {resProject.description}</li>
                <li>Index énergétique : {resProject.energieIndex.index}</li>
            </ul>
            <ul>
                <li><h3>Options : </h3></li>
                {resProject.option_project.map(option => (
                    <OptionProperty optionId={option.id_Option} key={option.id}/>
                ))}
            </ul>
        </div>
    );
}

export default ListInfoProperty;