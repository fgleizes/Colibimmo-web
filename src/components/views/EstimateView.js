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
      <h1 className="my-3">Vous souhaitez faire estimer votre bien ?</h1>
      <h2 className="my-3">Envoyer nous un email</h2>
      <Form inputs={inputs}>
          <Button type="submit">Envoyer</Button>
      </Form>
    </div>
  );
}

export default EstimateView;
