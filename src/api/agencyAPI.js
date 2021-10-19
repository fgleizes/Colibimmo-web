import axios from "axios"

// API URL FOR USER ROUTES
const API_URL = "http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/agency/"

export const getAgency = (id_Agency,token) => {
    const URL = `${API_URL}${id_Agency}`
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