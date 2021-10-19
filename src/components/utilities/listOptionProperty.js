function ListOptionProperty(props) {
    console.log(props)
    const {options, className, type} = props
    // const options = props.option
    // const className = props.className
    // const type = props.type

    return (
        <ul className={className}>
            {options.map(itemOption => {
                if(type === "li"){
                    return (
                        <li className="itemOption" key={itemOption.id}>
                            <p>{itemOption.id_Option}</p>
                            <p>{itemOption.id_Project}</p>
                        </li>
                    )
                } else if(type === "p"){
                    return (
                        <div className="itemOption" key={itemOption.id}>
                            <p>{itemOption.id_Option}</p>
                            <p>{itemOption.id_Project}</p>
                        </div>
                    )
                }
            })}
        </ul>
    );
}

export default ListOptionProperty;