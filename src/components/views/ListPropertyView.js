
import { listProperty } from "../../api/propertyAPI"
import { useEffect, useState } from "react"
import ProjectCard from '../utilities/ProjectCard'
import './PropertyView.css'


function ListPropertyView () {
    const [dataPropertyList,setDataPropertyList] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        listProperty().then(resList => {
            setDataPropertyList(resList)
            setIsLoading(false)
        });
    },[])

    return (
        <div>
            {!isLoading &&
                <div className="containerPropertyView">
                    {dataPropertyList.map((itemProject, index) => 
                        <ProjectCard itemProject={itemProject} key={index} />
                    )}
                </div>
            }
        </div>
    );   
}
export default ListPropertyView