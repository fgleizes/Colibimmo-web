import axios from "axios"
import React from "react"


export const login = (email,mdp) => {
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/user/login?mail=${email}&password=${mdp}`)
    .then(res => {
       return res.data.access_token
    })
}

export const register = (user) => {
    return axios.post(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/user/register`,user)
    .catch(err => console.log(err.response))
}