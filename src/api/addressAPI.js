import axios from "axios"

// API URL FOR USER ROUTES
const API_URL = "http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/address/"

export const getAddress = (id_Address,token) => {
    const URL = `${API_URL}${id_Address}`
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

export const getCity = (id_City, token) => {
    const URL = `${API_URL}city/${id_City}`
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

export const getRegion = (id_Region, token) => {
    const URL = `${API_URL}region/${id_Region}`
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