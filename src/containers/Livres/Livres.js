import React, { Component } from "react";
import Livre from "./Livre/Livre"
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"la vie de reve", auteur:"nola malcom", nbPages:500},
            {id:2, titre:"Je prete pas", auteur:"Lyly malcom", nbPages:500},
            {id:3, titre:"I have a dream", auteur:"Nola malcom", nbPages:500},
            {id:4, titre:"Meme pas mal", auteur:"Alyssa malcom", nbPages:500},
        ],
        lastIdLivre : 5,
    }

    handleSuppressionLivre = (id) => {
      const livreIndexTab = this.state.livres.findIndex(l => {
          return l.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({livres:newLivres});
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
               lastIdLivres: oldState.lastIdLivre + 1
           }
       })
    }

    render() {
        return (
            <>
            <table className="table text-center">
                <thead>
                <tr className="table-dark">
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Nombre de pages</th>
                    <th colspan="2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.livres.map(livre => {
                    return(
                        <tr key={livre.id}>
                            <Livre
                            titre={livre.titre}
                            auteur={livre.auteur}
                            nbPages={livre.nbPages}
                            suppression={() => this.handleSuppressionLivre(livre.id)}
                            />
                        </tr>

                    );

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