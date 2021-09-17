import axios from "axios"
import { profile } from "../components/utilities/Profile"

// API URL FOR USER ROUTES
const API_URL = "http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/user/"



export const login = (email,mdp) => {
    const URL = `${API_URL}login?mail=${email}&password=${mdp}`
    return axios.get(URL)
        .then(response => {
            return response.data.access_token
        })
}

export const register = user => {
    const URL = `${API_URL}register`
    return axios.post(URL, user)
        .then(response => {
            console.log(response)
            console.log(response.data)
            return response
        })
        .catch(error => {
            console.log(error)
            console.log(error.response)
        })
}


export const getProfil = (token) => {
    const URL = `${API_URL}me`
    return axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            
            return response
        })
        .catch(error => {
            console.log(error)
            console.log(error.response)
        })
}

    export const logout = (token) => {
        const URL = `${API_URL}logout`
        return axios.get(URL, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log(response)
                console.log(response.data)
                return response
            })
            .catch(error => {
                console.log(error)
                console.log(error.response)
            })
    }

    export const refresh = (token) => {
        const URL = `${API_URL}refresh`
        return axios.get(URL, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log(response)
                console.log(response.data)
                return response
            })
            .catch(error => {
                console.log(error)
                console.log(error.response)
            })
    }