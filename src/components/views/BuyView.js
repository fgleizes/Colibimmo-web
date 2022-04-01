import { listPropertyByType, listProjectsBySearch } from "../../api/propertyAPI"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ProjectCard from '../utilities/ProjectCard'
import SearchBar from '../utilities/SearchBar'
import './PropertyView.css'


function BuyView() {
  const [dataPropertyList, setDataPropertyList] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const idTypeProject = "2"
  const location = useLocation();


  useEffect(() => {
    if(location.search) {
      listProjectsBySearch(location.search, idTypeProject).then(response => {
        if (response.status === 200) {
          setDataPropertyList(response.data)
          setIsLoading(false)
        }
      })
    } else {
      listPropertyByType(idTypeProject).then(resList => {
        setDataPropertyList(resList)
        setIsLoading(false)
      });
    }
  }, [location])

  return (
    <div>
      <h1 className="text-center my-3">Acheter un bien</h1>
      {!isLoading &&
        <div className="containerPropertyView">
          <SearchBar idTypeProject={idTypeProject} numberOfResults={dataPropertyList.length}/>
          {dataPropertyList.map((itemProject, index) =>
            <ProjectCard itemProject={itemProject} key={index} />
          )}
        </div>
      }
    </div>
  );
}
export default BuyView