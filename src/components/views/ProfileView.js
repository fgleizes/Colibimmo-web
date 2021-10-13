import { useContext, useEffect, useState } from "react"
import { getRole } from "../../api/roleAPI"
import { getProfile } from "../../api/userAPI"
import "./ProfileView.css"
import { UserContext } from "../../user-context";

export const ProfileView = () => {
    const contextUser = useContext(UserContext);
    console.log(contextUser.token)
    const [profileUser, setProfileUser] = useState()
    useEffect(() => {
        getProfile(contextUser.token)
            .then(response => {
                //console.log(contextUser.token)
                //console.log(response)
                if (response.status === 200) {
                    setProfileUser(response.data);
                }
            })
    }, [contextUser]);

    /*if(profileUser) {
       for (const key in profileUser) {
           if (profileUser.hasOwnProperty.call(profileUser, key) && profileUser[key] != null) {
               console.log(key);
               console.log(profileUser[key]);

               //console.log(getRole(profileUser.id_Role,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMjQ5NzI1OSwiZXhwIjoxNjMyNTAwODU5LCJuYmYiOjE2MzI0OTcyNTksImp0aSI6IjBlVjgxMHZ1bWZTTllERDYiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.RbsNJK4FjjN4Q9z_OEsDQbs9bVA_M_Sj43Q8q6Szrys'))
                   console.log(profileUser.id_Role)
           }
       }
   }*/

    const thisProfileUser = { ...profileUser }
    const [roleUser, setRoleUser] = useState()
    useEffect(() => {
        getRole(thisProfileUser.id_Role, contextUser.token)
            .then(response => {
                //console.log(response)
                const thisResponse = { ...response }
                if (thisResponse.status === 200) {
                    setRoleUser(response.data);
                }
            })
    }, [thisProfileUser, contextUser]);

    const thisRoleUser = { ...roleUser }

    /*if(roleUser) {
        for (const key in roleUser) {
            if (roleUser.hasOwnProperty.call(roleUser, key) && roleUser[key] != null) {
                console.log(key);
                console.log(roleUser[key]);

                //console.log(getRole(profileUser.id_Role,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMjQ5NzI1OSwiZXhwIjoxNjMyNTAwODU5LCJuYmYiOjE2MzI0OTcyNTksImp0aSI6IjBlVjgxMHZ1bWZTTllERDYiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.RbsNJK4FjjN4Q9z_OEsDQbs9bVA_M_Sj43Q8q6Szrys'))
                    console.log(roleUser.name)
            }
        }
    }*/

    return (
        <ul className="profileView">
            <li>Nom et Prénom : {thisProfileUser.lastname} {thisProfileUser.firstname}</li>
            <li>Rôle : {thisRoleUser.name}</li>
            <li>Mail : {thisProfileUser.mail}</li>
        </ul>
    )
}