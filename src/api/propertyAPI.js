import axios from "axios"
export const showProperty = (idProject) => {
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/${idProject}`)
        .then(res => {
            return res.data
        })
}

export const showPropertyFavorites = (idPerson) => {
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/favorites/${idPerson}`)
        .then(res => {
            return res.data
        })
}

export const showOption = (id_Option) => {
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/option/${id_Option}`)
        .then(res => {
            return res.data.name
        })
}

export const listProperty = () => {
    
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project` )
        .then(resList => {
            return resList.data
        })
}

export const listPropertyByType = (idTypeProject) => {
    
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/projectsByType/${idTypeProject}` )
        .then(resList => {
            return resList.data
        })
}
export const listProjectsByPerson = (idPerson) => {
    
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/person/${idPerson}` )
        .then(response => {
            return response
        })
}
export const listProjectsByAgent = (idAgent) => {
    
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/personAgent/${idAgent}` )
        .then(response => {
            return response
        })
}
export const listProjectsBySearch = (searchTherm, idTypeProject) => {

    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/search${searchTherm}&id_Type_project=${idTypeProject}`)
        .then(response => {
            return response
        })
}
export const listPropertyHomeView = () => {

    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/home`)
        .then(resList => {
            return resList.data
        })
}

export const addFavorite = (idProject, token) => {
    const data = { id_Project: idProject }
    
    return axios.post(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/favorite`, data, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            return response
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response)
                return error.response
            }
            else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
}

export const deleteFavorite = (id, token) => {
    return axios.delete(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/favorite/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            return response
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response)
                return error.response
            }
            else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
}

export const getFavorite = (token) => {

    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/favorite`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            return response
        })
}


/***************** PROTOTYPE POUR GESTION DES CODES STATUS *****************/
// const statusCodeHandler = (response, token) => {
//     const contextUser = useContext(UserContext);
//     switch (response.status) {
//         case 200: // OK
//             return response
//             break;
//         case 201: // Created
//             return response
//             break;
//         case 304: // Not modified

//             break;
//         case 400: // Bad request
        
//             break;
//         case 401: // Unauthorized
//             refresh(token).then(response => {
//                 if (response == 200) {
//                     newToken = response.data.access_token
//                     console.log(response.data.access_token)
//                 }
//             })
//             break;
//         case 404: // Not Found
//             // Ressource not found : pas une erreur de l'API
//             break;
//         case 409: // Conflict
            
//             break;
//         case 500: // Internal Server error
            
//             break;
//         default:
//             break;
//     }
// }