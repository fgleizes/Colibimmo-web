import axios from "axios"


export const showProperty = () => {
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project/2`)
    .then(res => {
       return res.data
       
    })

}

export const showOption = (id_Option) => {
    console.log(id_Option)
    const optionId = id_Option
    console.log(optionId)
    // const URL_API = 
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/option/${optionId}`)
    .then(res => {
        console.log(res)
        return res.data.name
        
    })
}




export const listPropertyByCity = () => {
    
    return axios.get(`http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/project` )
    
    
    .then(resList => {
        console.log(resList.data)
       return resList.data
       
    })
}