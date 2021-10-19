function ListInfoProperty(props) {
    console.log(props)
    const {data} = props
    // const options = props.option
    // const className = props.className
    // const type = props.type

    return (
        <ul className="listDescProperty">
            <li><h2>{data.id_Type_project} {data.id_Statut_project}</h2></li>
            <li>5 PIECES : 3 CHAMBRES //données à recuperer//<hr></hr></li>
            <li>prix : {data.price}</li>
            <li>surface : {data.area}</li>
            <li>adresse : {data.id_Adresse}</li>
            <li>description : {data.description}</li>
            <li>index energetique : {data.id_Energy_index}</li>
        </ul>
    );
}

export default ListInfoProperty;