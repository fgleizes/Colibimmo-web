import "./EstimateView.css"
import {Form} from "../utilities/Form"
import {Button} from "../utilities/Button"

function EstimateView() {
  const inputs = [
    {
      name : "lastname",
      type : "text",
      placeholder : "Nom",
      required: true
    },
    {
      name : "firstname",
      type : "text",
      placeholder : "Prénom",
      required: true
    },
    {
      name : "phone",
      type : "tel",
      placeholder : "Numéro de téléphone",
      required: false,
      minLength: 10,
      maxLength: 10,
      pattern: "^0[1-9]\\d*$"
      // pattern: "^0[1-9]\\d{8}$"
    },
    {
      name : "email",
      type : "email",
      placeholder : "Adresse mail",
      required: true
    },
    {
      name : "comments",
      type : "textarea",
      placeholder : "Préciser votre demande",
      required: true
    },
  ]
  return (
    <div className="estimateView">
      <h1>Vous souhaitez faire estimer votre bien ?</h1>
      <h2>Envoyer nous un email</h2>
      {/* <form>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <textarea></textarea>
        <div className="container-buttons">
          <Button type="submit">Envoyer</Button>
          <Button type="reset">Annuler</Button>
        </div>
      </form> */}
      <Form inputs={inputs}>
        {/* <div className="container-buttons"> */}
          <Button type="submit">Envoyer</Button>
          {/* <Button type="reset">Annuler</Button> */}
        {/* </div> */}
      </Form>
    </div>
  );
}

export default EstimateView;
