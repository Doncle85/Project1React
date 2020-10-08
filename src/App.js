import React from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Bouton from "./components/Bouton/Bouton";
import Livres from "./containers/Livres/Livres";

function App() {
  return (
   <div className="container">
     <TitreH1>Pages listant les livres</TitreH1>
       <Livres/>
       <Bouton typeBtn="btn-success"
               css="w-100"
               clic={() => console.log("AJOUT")}>Ajouter
       </Bouton>
   </div>
  );
}

export default App;
