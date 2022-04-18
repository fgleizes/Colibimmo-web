import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../user-context";
import { getProfile } from "../../api/userAPI"
import { getPerson } from "../../api/personAPI";
import { Redirect } from "react-router-dom"
//import { getAddress } from "../../api/adresseAPI";
import { getAgency } from "../../api/agencyAPI";
import { getProjectByPerson } from "../../api/projectByPersonAPI";
import { getAppointmentByProject } from "../../api/appointmentByProject";
import { Tab, Tabs } from 'react-bootstrap';
import "./ProfileView.css"

const ProfileView = () => {
    const contextUser = useContext(UserContext);
    const [userProfile, setUserProfile] = useState({})
    const [userAddress, setUserAddress] = useState({})
    const [agencyDetails, setAgencyDetails] = useState({})
    const [agencyAddress, setAgencyAddress] = useState({})
    const [userKey, setUserKey] = useState('userInformations')
    const [agencyKey, setAgencyKey] = useState('agencyInformations')
    const [projectUser, setProjectUser] = useState({})
    const [projectAppointment, setProjectAppointment] = useState({})

    useEffect(() => {
        if (contextUser.token) {
            getProfile(contextUser.token)
                .then(response => {
                    if (response.status === 200) {
                        const user = response.data
                        console.log(user.role)
                        console.log(user.id)
                        getPerson(user.id, token)
                            .then(response => {
                                setUserProfile({ ...user, "person": response.data })
                                
                            })
                        }

                        if (user.id_Agency != null) {
                            getAgency(user.id_Agency, token)
                                .then(response => {
                                    const agency = response.data;
                                    setAgencyDetails(agency)

                                    if (agency.id_Address != null) {
                                        getAddress(agency.id_Address, token)
                                            .then(response => {
                                                setAgencyAddress(response.data)
                                            })
                                    }
                                })
                        }
                        if (user.id != null) {
                            getProjectByPerson(user.id, token)
                                .then(response => {
                                    const userProject = response.data;
                                    setProjectUser(userProject)
                                    console.log(userProject)
                                if (userProject != null) {
                                    getAppointmentByProject(userProject.id, token)
                                        .then(response => {
                                            const dateProject = response.data;
                                            setProjectUser(dateProject)
                                            console.log(dateProject)
                                        })
                                }
                            })
                        }
                    }
            
    , [contextUser])}
    
    if (!contextUser.isLoggedIn) {
        return <Redirect to="/home" />
    }

    return (
        <div className="profileView">
            <h1>Détails de {contextUser.user.firstname} {contextUser.user.lastname}</h1>
            {userProfile && userProfile.id &&
                <div className="userContainer">
                    <h2>Mon profil : </h2>
                    <div className="userProfile">
                        <Tabs
                            activeKey={userKey}
                            defaultActiveKey="userInformations"
                            onSelect={(k) => setUserKey(k)}
                            className="userProfile"
                            variant="tabs"
                        >
                            <Tab eventKey="userInformations" title="Informations">
                                <ul>
                                    <li>Prénom : {contextUser.user.firstname}</li>
                                    <li>Nom : {contextUser.user.lastname}</li>
                                    <li>Téléphone : {userProfile.phone}</li>
                                    <li>Email : {userProfile.mail}</li>
                                    <li>Rôle : { JSON.stringify(userProfile.role.name).split('"')}</li>
                                    <li>Créé le : {formatDate(userProfile.created_at)}</li>
                                    {userProfile.updated_at && <li>Modifié le : {formatDate(userProfile.updated_at)}</li>}
                                </ul>
                            </Tab>
                            <Tab eventKey="userAddress" title="Adresse">
                                <ul>
                                    {userAddress.number && <li>Numéro : {userAddress.number}</li>}
                                    {userAddress.street && <li>Rue : {userAddress.street}</li>}
                                    {userAddress.additional_address && <li>Complément d'adresse : {userAddress.additional_address}</li>}
                                    {userAddress.residence && <li>Résidence : {userAddress.residence}</li>}
                                    {userAddress.building && <li>Bâtiment : {userAddress.building}</li>}
                                    {userAddress.staircase && <li>Escalier : {userAddress.staircase}</li>}
                                    {userAddress.floor && <li>Etage : {userAddress.floor}</li>}
                                    {userAddress.id_City && <li>Ville : {userAddress.id_City}</li>}
                                    {userAddress.id_City && <li>Région :</li>}
                                </ul>
                            </Tab>
                        </Tabs>
                    </div>

                    {/* <h2>Mon profil : </h2>
                    <div className="userProfile">
                        <h3>Mes informations</h3>
                        <ul>
                            <li>Prénom : {contextUser.user.firstname}</li>
                            <li>Nom : {contextUser.user.lastname}</li>
                            <li>Téléphone : {userProfile.phone}</li>
                            <li>Email : {userProfile.mail}</li>
                            <li>Rôle : {userProfile.role}</li>
                            <li>Créé le : {formatDate(userProfile.created_at)}</li>
                            {userProfile.updated_at && <li>Modifié le : {formatDate(userProfile.updated_at)}</li>}
                        </ul>
                    </div>
                    {userProfile.id_Address && userAddress && 
                        <div className="userAddress">
                            <h3>Mon adresse :</h3>
                            <ul>
                                {userAddress.number && <li>Numéro : {userAddress.number}</li>}
                                {userAddress.street && <li>Rue : {userAddress.street}</li>}
                                {userAddress.additional_address && <li>Complément d'adresse : {userAddress.additional_address}</li>}
                                {userAddress.residence && <li>Résidence : {userAddress.residence}</li>}
                                {userAddress.building && <li>Bâtiment : {userAddress.building}</li>}
                                {userAddress.staircase && <li>Escalier : {userAddress.staircase}</li>}
                                {userAddress.floor && <li>Etage : {userAddress.floor}</li>}
                                {userAddress.id_City && <li>Ville : {userAddress.id_City}</li>}
                                {userAddress.id_City && <li>Région :</li>}
                            </ul>
                        </div>
                    } */}
                </div>
            }

            {userProfile && myProjects && myProjects.length > 0 &&
                <ProjectsTabs projects={myProjects} />
            }

            {userProfile.id_Agency && agency &&
                <AgencyTabs agency={agency} />
            }
        </div>
    )
})}

export default ProfileView