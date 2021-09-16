import axios from "axios"

// API URL FOR USER ROUTES
const API_URL = "http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/user/"

export const login = (email,mdp) => {
    const URL = `${API_URL}login?mail=${email}&password=${mdp}`
    return axios.get(URL)
        .then(response => {
            return response
        })
        .catch(error => {
            if (error.response) {
                return error.response
            } 
            else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
}

export const register = user => {
    const URL = `${API_URL}register`
    return axios.post(URL, user)
        .then(response => {
            return response
        })
        .catch(error => {
            if (error.response) {
                return error.response
            }
            else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
}