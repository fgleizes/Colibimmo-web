
import '../utilities/Button.css'
import {listPropertyByCity} from "../../api/propertyAPI"
import {  useEffect, useState } from "react"
import ProjectCard from '../utilities/ProjectCard'
import './PropertyView.css'


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
        <div className="containerPropertyView">
            {dataPropertyList.map(itemProject => 
            <ProjectCard itemProject={itemProject}/>
            )}
        </div>
        }
    </div>
);   
}
 export default ListPropertyView