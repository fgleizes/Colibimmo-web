import axios from "axios"

export const showProperty = (idProject) => {
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/${idProject}`)
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

export const listPropertyByCity = () => {
    
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project` )
        .then(resList => {
            return resList.data
        })
}