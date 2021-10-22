
import {  useEffect, useState } from "react"
import {  showProperty } from "../../api/propertyAPI";
import './PropertyView.css'

import {PropertyInfoContainer} from './PropertyInfoContainer'
import { useParams } from "react-router-dom";


function PropertyView() {
  const {id} = useParams()
  console.log(id)
  const [dataProperty,setDataProperty] = useState({});
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {

    showProperty(id).then(res => {
        console.log(res)
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