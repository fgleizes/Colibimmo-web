function ListInfoProperty(props) {
    // console.log(props)
    const {resProject} = props
    // const options = props.option
    // const className = props.className
    // const type = props.type

    return (
        <ul className="descProperty">
            <li><h2>{resProject.id_Type_project} {resProject.id_Statut_project}</h2></li>
            <li>5 PIECES : 3 CHAMBRES //données à recuperer//<hr></hr></li>
            <li>prix : {resProject.price}</li>
            <li>surface : {resProject.area}</li>
            <li>adresse : {resProject.id_Adresse}</li>
            <li>description : {resProject.description}</li>
            <li>index energetique : {resProject.id_Energy_index}</li>
        </ul>
    );
}

export default ListInfoProperty;