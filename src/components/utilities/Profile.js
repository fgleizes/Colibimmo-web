import { useEffect, useState } from "react"
import { getProfil } from "../../api/userAPI"
export const Profile = () => {
    const [profileUser, setProfileUser] = useState()
    useEffect(() => {
        getProfil('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzMTg3ODU5OSwiZXhwIjoxNjMxODgyMTk5LCJuYmYiOjE2MzE4Nzg1OTksImp0aSI6ImtZSTE4azd5MjNpMzJjZUoiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.r8HpBhyGy1QITgDj-f8d8t6behcNHO64ohRYl-Xb_xM')
            .then( response => {
                console.log(response)
                if(response.status === 200 ){
                    setProfileUser(response.data);
                }
            })
    }, []);

    if(profileUser) {
         for (const key in profileUser) {
             if (profileUser.hasOwnProperty.call(profileUser, key)) {
                 console.log(profileUser[key]);
             }
         }
     }
    return (
        <p>{}</p>
    )
}