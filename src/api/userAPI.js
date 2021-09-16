import axios from "axios"

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