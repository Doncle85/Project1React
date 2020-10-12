import React, { Component } from "react";
import Livre from "./Livre/Livre"
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModifification from "./FormulaireModification/FormulaireModification";
import Alert from "../../components/Alert/Alert"

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"la vie de reve", auteur:"nola malcom", nbPages:500},
            {id:2, titre:"Je prete pas", auteur:"Lyly malcom", nbPages:500},
            {id:3, titre:"I have a dream", auteur:"Nola malcom", nbPages:500},
            {id:4, titre:"Meme pas mal", auteur:"Alyssa malcom", nbPages:500},
        ],
        lastIdLivre : 5,
        idLivreAModifier : 0,
        alertMessage : null
    }

    handleSuppressionLivre = (id) => {
      const livreIndexTab = this.state.livres.findIndex(l => {
          return l.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({
            livres:newLivres,
            alertMessage:{
                message:"Suppression effectuée",
                type:"alert-danger"
            }
        });
    }

    handleAjoutLivre = (titre,auteur,nbPages) => {
       const newLivre = {
           id: this.state.lastIdLivre+1,
           titre: titre,
           auteur :auteur,
           nbPages: nbPages
       }
       const newListLivres = [...this.state.livres];
       newListLivres.push(newLivre);

       this.setState(oldState => {
           return {
               livres :newListLivres,
               lastIdLivres: oldState.lastIdLivre + 1,
               alertMessage:{
                   message:"Ajout efféctué",
                   type : "alert-success"
               }
           }
       })
        this.props.fermerAjoutLivre();
    }

    handleModificationLivre = (id,titre,auteur,nbPages) => {
        const caseLivre = this.state.livres.findIndex(l => {
            return l.id === id;
        });

        const newLivre = {
            id,
            titre,
            auteur,
            nbPages
        };

        const newListe = [...this.state.livres];
        newListe[caseLivre] = newLivre;

        this.setState({
            livres : newListe,
            idLivreAModifier : 0,
            alertMessage: {
                message: "Modification effectuée",
                type: "alert-warning"
            }
        })
}

    render() {
        return (
            <>
                {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
            <table className="table text-center">
                <thead>
                <tr className="table-dark">
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Nombre de pages</th>
                    <th colSpan="2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.livres.map(livre => {
                        if(livre.id !== this.state.idLivreAModifier) {
                            return (
                                <tr key={livre.id}>
                                    <Livre
                                        titre={livre.titre}
                                        auteur={livre.auteur}
                                        nbPages={livre.nbPages}
                                        suppression={() => this.handleSuppressionLivre(livre.id)}
                                        modification={() => this.setState({idLivreAModifier: livre.id})}
                                    />
                                </tr>

                            );
                        }else{
                            return(
                                <tr key={livre.id}>
                                <FormulaireModifification
                                id={livre.id}
                            titre={livre.titre}
                            auteur={livre.auteur}
                            nbPages={livre.nbPages}
                            validationModification={this.handleModificationLivre}
                            />
                                </tr>
                            )
                            ;
                        }
                })
                }
                    </tbody>
                    </table>
        {this.props.ajoutLivre && <FormulaireAjout validation={this.handleAjoutLivre}/>}
        </>
        )
    }
}

export default Livres;