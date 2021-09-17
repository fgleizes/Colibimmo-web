import { useEffect, useState } from "react"
import { getProfile } from "../../api/userAPI"
export const Profile = () => {
    const [profileUser, setProfileUser] = useState()
    useEffect(() => {
        getProfile('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMTg4MjQyNywiZXhwIjoxNjMxODg2MDI3LCJuYmYiOjE2MzE4ODI0MjcsImp0aSI6Imc1UVNTVUxWaXBSNTNiTkQiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.sT9xECMu4WhY46q72j5LiyB3tepLpluim7NpeBZ2rGw')
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
    

     
    return (

        <ul className = "profile">
            <li>{lastname}</li>
            <li>{firstname}</li>
        </ul>
    )
}