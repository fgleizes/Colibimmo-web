import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../user-context";
import { getProfile } from "../../api/userAPI"
import { getRole } from "../../api/roleAPI"
import { Redirect } from "react-router-dom"
import "./ProfileView.css"
import { getAddress } from "../../api/adresseAPI";
import { getAgency } from "../../api/agencyAPI";

export const ProfileView = () => {
    const contextUser = useContext(UserContext);
    const token = contextUser.token
    const [profileUser, setProfileUser] = useState()
    const [profileUserAddress, setProfileUserAddress]=useState()
    const [profileUserAgency, setProfileUserAgency]=useState()
    let createdDate = ""

    useEffect(() => {
        getProfile(token)
            .then(response => {
                if (response.status === 200) {
                    const user = response.data;
                    getRole(user.id_Role, token)
                        .then(response => {
                            setProfileUser({ ...user, "role": response.data.name })
                            console.log(response.data)
                        })
                    if(user.id_Address != null){
                        getAddress(user.id_Address, token)
                        .then(response=>{
                            setProfileUserAddress({ ...user, "address": response.data.number + " " 
                            + response.data.street +" Bâtiment : "+ response.data.building +" étage : "+ response.data.floor + " residence "+ response.data.residence })
                        })
                    }else{
                            setProfileUserAddress({ ...user, "address": "Ne possede pas d'adresse" })
                    }

                    if(user.id_Agency != null){
                        getAgency(user.id_Agency, token)
                            .then(response=>{
                                setProfileUserAgency({ ...user, "agency": response.data.name + " mail : "+ response.data.mail + " téléphone : " + response.data.phone})
                            })
                    }else{
                        setProfileUserAgency({ ...user, "agency": "Ne possede pas d'agence" })
                    }
                    
                    
                }
            })
    }, [token]);

    if (profileUser && profileUser.created_at) {

        createdDate = new Date(profileUser.created_at)
        let createdDay = createdDate.getDate() < 10 ? "0" + createdDate.getDate() : createdDate.getDate()
        let createdMonth = createdDate.getMonth() < 10 ? "0" + createdDate.getMonth() : createdDate.getMonth()
        let createdYear = createdDate.getFullYear()
        createdDate = `${createdDay}/${createdMonth}/${createdYear}`
    }

    if (!contextUser.isLoggedIn) {
        return <Redirect to="/home" />
    }

    return (
        <ul className="profileView">
            <li>Prénom : {profileUser && profileUser.firstname}</li>
            <li>Nom : {profileUser && profileUser.lastname}</li>
            {profileUserAgency && profileUserAgency.agency && <li>Agence : {profileUserAgency.agency}</li>}
            <li>Adresse : {profileUserAddress && profileUserAddress.address}</li>
            <li>Rôle : {profileUser && profileUser.role}</li>
            <li>Téléphone : {profileUser && profileUser.phone}</li>
            <li>Mail : {profileUser && profileUser.mail}</li>
            <li>Crée le : {profileUser && createdDate}</li>
            <li>Modifié le : {profileUser && profileUser.updated_at}</li>
        </ul>
    )
}