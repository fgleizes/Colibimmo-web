import axios from "axios"
import React from "react"

export const showProperty = () => {
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/2`)
    .then(res => {
       return res.data
       
    })

}