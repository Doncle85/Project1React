import React from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Bouton from "./components/Bouton/Bouton";

function App() {
  return (
   <div className="container">
     <TitreH1>Pages listant les livres</TitreH1>
       <div>Livres</div>
       <Bouton typeBtn="btn-danger" clic={() => console.log("AJOUT")}>Ajouter</Bouton>
       <Bouton typeBtn="btn-success" clic={() => console.log("Modifier")}>Modifier</Bouton>
       <Bouton typeBtn="btn-warning" clic={() => console.log("SUPPROIMER")}>Supprimer</Bouton>
   </div>
  );
}

export default App;
