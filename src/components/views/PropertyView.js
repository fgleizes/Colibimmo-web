
import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {  showProperty } from "../../api/propertyAPI"
import { PropertyInfoContainer } from './PropertyInfoContainer'
import './PropertyView.css'

function PropertyView() {
  const {id} = useParams()
  const [dataProperty,setDataProperty] = useState({})
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    showProperty(id).then(res => {
      setDataProperty(res)
      setIsLoading(false)
    });
},[id])
  return (
    <div className="PropertyView">   
      {!isLoading &&   
        <PropertyInfoContainer resProject={dataProperty}/>
      }
    </div>

  );
}

export default PropertyView;