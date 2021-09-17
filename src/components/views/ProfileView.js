import { useEffect, useState } from "react"
import { getProfile } from "../../api/userAPI"
import "./ProfileView.css"
export const ProfileView = () => {
    const [profileUser, setProfileUser] = useState()
    useEffect(() => {
        getProfile('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMTg4NDg5OCwiZXhwIjoxNjMxODg4NDk4LCJuYmYiOjE2MzE4ODQ4OTgsImp0aSI6IkthYnZsSlN6UWgycEZmazEiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.aHQMeAiwKyf6vo1o9aDe4tE3zzw0NKx8nTTMc6hdfJw')
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
    

     
    return (

        <ul className = "profileView">
            <li>Nom et Prénom : {lastname} {firstname}</li>
            <li>{role}</li>
        </ul>
    )
}