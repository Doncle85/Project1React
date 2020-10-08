import React, { Component } from "react";
import Bouton from "../../components/Bouton/Bouton"

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"la vie de reve", auteur:"nola malcom", nbPages:500},
            {id:2, titre:"Je prete pas", auteur:"Lyly malcom", nbPages:500},
            {id:3, titre:"I have a dream", auteur:"Nola malcom", nbPages:500},
            {id:4, titre:"Meme pas mal", auteur:"Alyssa malcom", nbPages:500},
        ]
    }
    render() {
        return (
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
                        <td>{livre.titre}</td>
                        <td>{livre.auteur}</td>
                        <td>{livre.nbPages}</td>
                        <td><Bouton typeBtn="btn-warning" clic={() => console.log("modification")}>Modifier</Bouton></td>
                        <td><Bouton typeBtn="btn-danger" clic={() => console.log("suppression")}>Supprimer</Bouton></td>
                        </tr>

                    );

                })
                }
                    </tbody>
                    </table>

        )
    }
}

export default Livres;