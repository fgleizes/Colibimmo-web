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
    const [profileUser, setProfileUser] = useState({})
    const [userAddress, setUserAddress]=useState({})
    const [userAgency, setUserAgency]=useState({})

    useEffect(() => {
        getProfile(token)
            .then(response => {
                if (response.status === 200) {
                    const user = response.data;
                    getRole(user.id_Role, token)
                        .then(response => {
                            setProfileUser({ ...user, "role": response.data.name })
                        })
                    if(user.id_Address != null){
                        getAddress(user.id_Address, token)
                            .then(response=>{
                                setUserAddress(response.data) 
                            })
                    }
                    if(user.id_Agency != null){
                        getAgency(user.id_Agency, token)
                            .then(response=>{
                                setUserAgency(response.data)
                            })
                    }
                }
            })
    }, [token]);

    if (!contextUser.isLoggedIn) {
        return <Redirect to="/home" />
    }

    return (
        <div className="profileView">
            {profileUser &&
                <div className="userProfile">
                    <h1>Informations utilisateur</h1>
                    <ul>
                        <li>Prénom : {profileUser.firstname}</li>
                        <li>Nom : {profileUser.lastname}</li>
                        <li>Téléphone : {profileUser.phone}</li>
                        <li>Mail : {profileUser.mail}</li>
                        <li>Rôle : {profileUser.role}</li>
                        <li>Crée le : {profileUser.created_at}</li>
                        <li>Modifié le : {profileUser.updated_at}</li>
                    </ul>
                </div>
            }
            {profileUser && profileUser.id_Address && userAddress && 
                <div className="userAddress">
                    <h2>Adresse :</h2>
                    <ul>
                        {Object.keys(userAddress).map(key => userAddress[key] && key !== "id" && <li>{key}: {userAddress[key]}</li>)}
                    </ul>
                </div>
            }
            {profileUser && profileUser.id_Agency && userAgency &&
                <div className="userAgency">
                    <h2>Informations agence :</h2>
                    <ul>
                        {Object.keys(userAgency).map(key => userAgency[key] && key !== "id" && <li>{key}: {userAgency[key]}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}