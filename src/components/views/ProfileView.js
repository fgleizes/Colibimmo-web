import { useEffect, useState } from "react"
import { getProfile } from "../../api/userAPI"
import "./ProfileView.css"
export const ProfileView = () => {
    const [profileUser, setProfileUser] = useState()
    useEffect(() => {
        getProfile('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMTg4ODU2NiwiZXhwIjoxNjMxODkyMTY2LCJuYmYiOjE2MzE4ODg1NjYsImp0aSI6IlZocXZZcTRxWGZtVTB1SVciLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.q1Yal4XIMB2GXQYak6PXX3i2aWzDpXUbBc-Y5FjUrbM')
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
             }
         }
     }

    //  console.log(profileUser.lastname)

     const lastname = profileUser.lastname;
     const firstname = profileUser.firstname;
     const role = profileUser.id_Role;
     const mail = profileUser.mail;

     
    return (

        <ul className = "profileView">
            <li>Nom et Prénom : {lastname} {firstname}</li>
            <li>Rôle : {role}</li>
            <li>Mail : {mail}</li>
        </ul>
    )
}