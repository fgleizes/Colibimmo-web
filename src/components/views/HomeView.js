import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../user-context";
import { listPropertyHomeView } from "../../api/propertyAPI"
import ProjectCard from '../utilities/ProjectCard'
import './PropertyView.css'

function HomeView() {
  const contextUser = useContext(UserContext);
  const [dataPropertyList, setDataPropertyList] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    listPropertyHomeView().then(resList => {
      setDataPropertyList(resList)
      setIsLoading(false)
    });
  }, [])
  
  return (
    <div>
      <h1 className="text-center my-3">Bienvenue {`${contextUser.user.firstname} ${contextUser.user.lastname}`} sur ColibImmo</h1>
      
      {!isLoading &&
        <div className="containerPropertyView">
          <h2>
            Les dernières annonces :
          </h2>
          <div className="containerProperty">
            {dataPropertyList.map((itemProject, index) =>
              <ProjectCard itemProject={itemProject} key={index} />
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default HomeView;