import React, { Component } from "react";
import Bouton from "../../components/Bouton/Bouton"

class Livres extends Component {
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
                <td>Titres1</td>
                <td>Auteur1</td>
                <td>100</td>
                <td><Bouton typeBtn="btn-warning" clic={() => console.log("modification")}>Modifier</Bouton></td>
                <td><Bouton typeBtn="btn-danger" clic={() => console.log("suppression")}>Supprimer</Bouton></td>
                </tbody>
            </table>
        )
    }
}

export default Livres;