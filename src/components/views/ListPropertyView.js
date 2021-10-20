
import '../utilities/Button.css'
import {listPropertyByCity} from "../../api/propertyAPI"
import {  useEffect, useState } from "react"



function ListPropertyView () {
    const [dataPropertyList,setDataPropertyList] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        listPropertyByCity().then(resList => {
            console.log(resList)
            setDataPropertyList(resList)
            setIsLoading(false)
        });
    },[])

return (
    
    <div>
        
        {!isLoading &&
        <ul>
            {dataPropertyList.map(itemProject => 
            <div className="propertyCard">
                <ul>
                <li> {itemProject.reference} </li>
                <li> {itemProject.id_Type_project} </li>
                <li> {itemProject.id_Type_project} </li>
                <li> {itemProject.max_area}</li>
                <li> {itemProject.price}</li>
                </ul>
            </div>
            )}
        </ul>
        }
    </div>
);   
}
 export default ListPropertyView