import { buttonContact } from "../utilities/Button";
import { form_contact } from "../utilities/Form";

export const ContactView = ()=>{

return <div className = "bloc_contact">
    {form_contact()}
    {buttonContact()}
</div>
    

}