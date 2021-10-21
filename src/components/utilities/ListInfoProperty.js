function ListInfoProperty(props) {
    // console.log(props)
    const {dataProperty} = props
    // const options = props.option
    // const className = props.className
    // const type = props.type

    return (
        <ul className="descProperty">
            <li><h2>{dataProperty.id_Type_project} {dataProperty.id_Statut_project}</h2></li>
            <li>5 PIECES : 3 CHAMBRES //données à recuperer//<hr></hr></li>
            <li>prix : {dataProperty.price}</li>
            <li>surface : {dataProperty.area}</li>
            <li>adresse : {dataProperty.id_Adresse}</li>
            <li>description : {dataProperty.description}</li>
            <li>index energetique : {dataProperty.id_Energy_index}</li>
        </ul>
    );
}

export default ListInfoProperty;