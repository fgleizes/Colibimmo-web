import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../user-context";
import { listProjectsByPerson, listProjectsByAgent } from "../../api/propertyAPI";
import { getAgency } from "../../api/agencyAPI";
import { getProfile } from "../../api/userAPI"
import { Redirect } from "react-router-dom"
import { UserTabs, AgencyTabs, ProjectsTabs } from "../utilities/ProfileTabs"
import "./ProfileView.css"

const ProfileView = () => {
    const contextUser = useContext(UserContext);
    const [userProfile, setUserProfile] = useState({})
    const [agency, setAgency] = useState()
    const [myProjects, setMyProjects] = useState()

    useEffect(() => {
        if (contextUser.token) {
            getProfile(contextUser.token)
                .then(response => {
                    if (response && response.status === 200) {
                        setUserProfile(response.data)

                        if(response.data.id_Role === 4) { // ==> role Agent
                            console.log('Agent')
                            listProjectsByAgent(contextUser.user.id).then(response => {
                                if (response && response.status === 200) {
                                    setMyProjects(response.data)
                                }
                            })
                        } else {
                            listProjectsByPerson(contextUser.user.id).then(response => {
                                if (response && response.status === 200) {
                                    setMyProjects(response.data)
                                }
                            })
                        }

                        if(response.data.id_Agency) {
                            getAgency(response.data.id_Agency, contextUser.token).then(response => {
                                if (response && response.status === 200) {
                                    setAgency(response.data)
                                }
                            })
                        }
                    } 
                })
        }
    }, [contextUser]);
    
    if (!contextUser.isLoggedIn) {
        return <Redirect to="/home" />
    }

    return (
        <div className="profileView">
            <h1>Détails de {contextUser.user.firstname} {contextUser.user.lastname}</h1>
            {userProfile && userProfile.id &&
                <UserTabs user={userProfile} />
            }

            {userProfile && myProjects && myProjects.length > 0 &&
                <ProjectsTabs projects={myProjects} />
            }

            {userProfile.id_Agency && agency &&
                <AgencyTabs agency={agency} />
            }
        </div>
    )
}

export default ProfileView;