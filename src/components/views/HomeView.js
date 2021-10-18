// import "./HomeView.css"
// import { UserContext } from "../../App";
import { useContext, } from "react";
import { UserContext } from "../../user-context";

function HomeView() {
  const contextUser = useContext(UserContext);
  
  return (
    <div className="container">
      <h1>Bienvenue {`${contextUser.user.firstname} ${contextUser.user.lastname}`} sur ColibImmo</h1>
      <p>
        La meilleure agence Immoblière du MONDE !!
      </p>
    </div>
  );
}

export default HomeView;
