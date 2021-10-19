import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../user-context";
import { getProfile } from "../../api/userAPI"
import { getRole } from "../../api/roleAPI"
import { Redirect } from "react-router-dom"
import "./ProfileView.css"

const ProfileView = () => {
    const contextUser = useContext(UserContext);
    const token = contextUser.token
    const [profileUser, setProfileUser] = useState()

    useEffect(() => {
        if (token) {
            getProfile(token)
                .then(response => {
                    if (response && response.status === 200) {
                        const user = response.data;
                        getRole(user.id_Role, token)
                            .then(response => {
                                setProfileUser({ ...user, "role": response.data.name })
                            })
                    }
                })
        }
    }, [token]);

    const formatDate = (profileUserdate) => {
        let date = new Date(profileUserdate)
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        let month = date.getMonth() < 10 ? "0" + (date.getMonth()+1) : (date.getMonth()+1)
        let year = date.getFullYear()
        return `${day}/${month}/${year}`;
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
            <li>Créé le : {profileUser && formatDate(profileUser.created_at)}</li>
            <li>Modifié le : {profileUser && formatDate(profileUser.updated_at)}</li>
        </ul>
    )
}

export default ProfileView;