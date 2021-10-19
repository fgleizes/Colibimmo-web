
import {  useEffect, useState } from "react"
import {  showProperty } from "../../api/propertyAPI";
import '../utilities/Button.css'
import ListInfoProperty from '../utilities/ListInfoProperty'
import ImgProperty from '../utilities/ImgProperty'
import OptionProperty from '../utilities/OptionProperty';

export const PropertyInfoContainer = () => {
    const [dataProperty,setDataProperty] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        showProperty().then(res => {
            console.log(res)
            setDataProperty(res)
            setIsLoading(false)
        });
    },[])

    return (
        <div className="containerPropertyView">
            {!isLoading &&
                <div className="InfoProperty">
                    <ImgProperty/>
                    <ListInfoProperty dataProperty={dataProperty}/>
                    <ul>
                        {dataProperty.project_option.map(option => (
                            // <p>{option.id_Option}</p>
                            // console.log(option.id_Option);
                            <OptionProperty optionId={option.id_Option} key={option.id}/>
                        ))}
                    </ul>
                    {/* <ListOptionProperty options={data.project_option} className="listOptionProperty" type="p" /> */}
                </div>
            }
        </div>
    );
}
