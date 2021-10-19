
import { Component, useEffect, useState } from "react"
import { showProperty } from "../../api/propertyAPI";
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import '../utilities/Button.css'
import {Button} from '../utilities/Button'
import ListOptionProperty from '../utilities/listOptionProperty'
import ListInfoProperty from '../utilities/ListInfoProperty'
import ImgProperty from '../utilities/ImgProperty'

export const PropertyInfoContainer = () => {
    const [data,setData] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        showProperty().then(res => {
            console.log(res)
            setData(res)
            setIsLoading(false)
        });
    },[])

    return (
        <div className="containerPropertyView">
            {!isLoading &&
                <div className="InfoProperty">
                    <ImgProperty/>
                    <ListInfoProperty data={data}/>
                    <ListOptionProperty options={data.project_option} className="listOptionProperty" type="p" />
                </div>
            }
        </div>
    );
}
