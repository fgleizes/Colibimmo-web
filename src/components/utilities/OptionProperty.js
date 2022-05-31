import { useEffect, useState } from "react"
import {showOption} from '../../api/propertyAPI'
const OptionProperty = (props) => {
    const {optionId, key} = props
    const [dataOption,setDataOption] = useState();
    useEffect(() => {
        showOption(optionId).then(res => {
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