import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../user-context";
import { getAgency } from "../../api/agencyAPI";
import { getProfile } from "../../api/userAPI"
import { Redirect } from "react-router-dom"
import { UserTabs, AgencyTabs } from "../utilities/ProfileTabs"
import "./ProfileView.css"

const ProfileView = () => {
    const contextUser = useContext(UserContext);
    const [userProfile, setUserProfile] = useState({})
    const [agency, setAgency] = useState()

    useEffect(() => {
        if (contextUser.token) {
            getProfile(contextUser.token)
                .then(response => {
                    if (response && response.status === 200) {
                        setUserProfile(response.data)
                        if(response.data.id_Agency) {
                            getAgency(response.data.id_Agency, contextUser.token)
                                .then(response => {
                                    if (response && response.status === 200) {
                                        setAgency(response.data)
                                    }
                                })
                        }
                    }
                })
        }
    }, [contextUser.token]);
    
    if (!contextUser.isLoggedIn) {
        return <Redirect to="/home" />
    }

    return (
        <div className="profileView">
            <h1>Détails de {contextUser.user.firstname} {contextUser.user.lastname}</h1>
            {userProfile && userProfile.id &&
                <UserTabs user={userProfile} />
            }

            {userProfile.id_Agency && agency &&
                <AgencyTabs agency={agency} />
            }
        </div>
    )
}

export default ProfileView;