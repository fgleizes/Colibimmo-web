import "./EstimateView.css"

function EstimateView() {
  return (
    <div className="container">
      <h1>Vous souhaitez faire estimer votre bien ?</h1>
      <h2>Envoyer nous un email</h2>
      <form>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <div>
          <input type="submit"></input>
          <input type="reset"></input>
        </div>
      </form>
    </div>
  );
}

export default EstimateView;
