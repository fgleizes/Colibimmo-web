import { useEffect, useState } from "react"
import { getRole } from "../../api/roleAPI"
import { getProfile } from "../../api/userAPI"
import "./ProfileView.css"
export const ProfileView = () => {
    const [profileUser, setProfileUser] = useState()    
    useEffect(() => {
        getProfile('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMjcyNzk5NywiZXhwIjoxNjMyNzMxNTk3LCJuYmYiOjE2MzI3Mjc5OTcsImp0aSI6IlBFdzNFVGo3bzU1Q1pmVHIiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.PKQCWWewlrS2WRQ2-YNgyuHV3n5T0lgEQp_4CHDlrs4')
            .then( response => {
                console.log(response)
                if(response.status === 200 ){
                    setProfileUser(response.data);
                }
            })
    }, []);



     if(profileUser) {
        for (const key in profileUser) {
            if (profileUser.hasOwnProperty.call(profileUser, key) && profileUser[key] != null) {
                console.log(key);
                console.log(profileUser[key]);

                //console.log(getRole(profileUser.id_Role,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMjQ5NzI1OSwiZXhwIjoxNjMyNTAwODU5LCJuYmYiOjE2MzI0OTcyNTksImp0aSI6IjBlVjgxMHZ1bWZTTllERDYiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.RbsNJK4FjjN4Q9z_OEsDQbs9bVA_M_Sj43Q8q6Szrys'))
                    console.log(profileUser.id_Role)
            }
        }
    }
    const objCopy = {...profileUser};

    if(objCopy) {
        for (const key in objCopy) {
            if (objCopy.hasOwnProperty.call(objCopy, key) && objCopy[key] != null) {
                console.log(key);
                console.log(objCopy[key]);

                //console.log(getRole(profileUser.id_Role,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMjQ5NzI1OSwiZXhwIjoxNjMyNTAwODU5LCJuYmYiOjE2MzI0OTcyNTksImp0aSI6IjBlVjgxMHZ1bWZTTllERDYiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.RbsNJK4FjjN4Q9z_OEsDQbs9bVA_M_Sj43Q8q6Szrys'))
                    //console.log(objCopy.id_Role)
            }
        }
    }
    const [roleUser, setRoleUser] = useState()    
    useEffect(() => {
        getRole(objCopy.id_Role,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMjcyNzk5NywiZXhwIjoxNjMyNzMxNTk3LCJuYmYiOjE2MzI3Mjc5OTcsImp0aSI6IlBFdzNFVGo3bzU1Q1pmVHIiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.PKQCWWewlrS2WRQ2-YNgyuHV3n5T0lgEQp_4CHDlrs4')
            .then( response => {
                console.log(response)
                if(response.status === 200 ){
                    setRoleUser(response.data);
                }
            })
    }, []);

    if(roleUser) {
        for (const key in roleUser) {
            if (roleUser.hasOwnProperty.call(roleUser, key) && roleUser[key] != null) {
                console.log(key);
                console.log(roleUser[key]);

                //console.log(getRole(profileUser.id_Role,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMjQ5NzI1OSwiZXhwIjoxNjMyNTAwODU5LCJuYmYiOjE2MzI0OTcyNTksImp0aSI6IjBlVjgxMHZ1bWZTTllERDYiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.RbsNJK4FjjN4Q9z_OEsDQbs9bVA_M_Sj43Q8q6Szrys'))
                    console.log(roleUser.name)
            }
        }
    }
    
    return (

        <ul className = "profileView">
            <li>Nom et Prénom : {profileUser.lastname} {profileUser.firstname}</li>
            <li>Rôle : {roleUser.name}</li>
            <li>Mail : {profileUser.mail}</li>
        </ul>
    )
}