import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../user-context";
import { getProfile } from "../../api/userAPI"
import { getRole } from "../../api/roleAPI"
import { Redirect } from "react-router-dom"
import "./ProfileView.css"

export const ProfileView = () => {
    const contextUser = useContext(UserContext);
    const token = contextUser.token
    const [profileUser, setProfileUser] = useState()
    let createdDate = ""

    useEffect(() => {
        getProfile(token)
            .then(response => {
                if (response.status === 200) {
                    const user = response.data;
                    getRole(user.id_Role, token)
                        .then(response => {
                            setProfileUser({ ...user, "role": response.data.name })
                        })
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
            {profileUser && profileUser.id_Agency && <li>Agence : {profileUser.id_Agency}</li>}
            <li>Adresse : {profileUser && profileUser.id_Address}</li>
            <li>Rôle : {profileUser && profileUser.role}</li>
            <li>Téléphone : {profileUser && profileUser.phone}</li>
            <li>Mail : {profileUser && profileUser.mail}</li>
            <li>Crée le : {profileUser && createdDate}</li>
            <li>Modifié le : {profileUser && profileUser.updated_at}</li>
        </ul>
    )
}