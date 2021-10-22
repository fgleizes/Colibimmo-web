
import {  useEffect, useState } from "react"
import {  showProperty } from "../../api/propertyAPI";
import '../utilities/Button.css'
import ListInfoProperty from '../utilities/ListInfoProperty'
import ImgProperty from '../utilities/ImgProperty'
import OptionProperty from '../utilities/OptionProperty';

export const PropertyInfoContainer = ({resProject}) => {

    console.log(resProject)

    return (
        <div className="containerPropertyView">
            
                <div className="InfoProperty">
                    <ImgProperty/>
                    <ListInfoProperty resProject={resProject}/>
                    <ul>
                        {resProject.project_option.map(option => (
                            <OptionProperty optionId={option.id_Option} key={option.id}/>
                        ))}
                    </ul>
                </div>
            
        </div>
    );
}
