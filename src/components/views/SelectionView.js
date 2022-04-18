import { showPropertyFavorites } from "../../api/propertyAPI"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../user-context"
import ProjectCard from '../utilities/ProjectCard'
import './PropertyView.css'


function SelectionView() {
  const contextUser = useContext(UserContext)
  const [dataPropertyList, setDataPropertyList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    showPropertyFavorites(contextUser.user.id)
      .then(response => { 
        setDataPropertyList(response)
        setIsLoading(false)
      })
  }, [contextUser.user.id])

  return (
    <div>
      <h1 className="text-center my-3">Mes annonces sauvegardées</h1>
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
export default SelectionView