import { useEffect, useState } from "react"
import {showOption} from '../../api/propertyAPI'
const OptionProperty = (props) => {
    console.log(props)
    const {optionId, key} = props
    console.log(optionId)
    const [dataOption,setDataOption] = useState();
    useEffect(() => {
        showOption(optionId).then(res => {
            console.log(res)
            setDataOption(res)
          
        });
    },[optionId])

    return (
        <li key={key}> 
        {dataOption}
        </li>
    );
}

export default OptionProperty;