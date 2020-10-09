import React, {Component} from "react";
import Bouton from "../../../components/Bouton/Bouton"

class FormulaireAjout extends Component{
    state = {
        titreSaisi : "",
        auteurSaisi: "",
        nbPagesChoisi : ""
    }

    handleValidationForm = (event) => {
    event.preventDefault();
        this.props.validation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nbPagesChoisi);
        this.setState({
            titreSaisi : "",
            auteurSaisi: "",
            nbPagesChoisi : ""
        })
    }

     render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{fontFamily:'Sigmar one'}}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du livre</label>
                        <input type="text"
                               className="form-control"
                               id="titre"
                               value={this.state.titreSaisi}
                               onChange={(event) => this.setState({titreSaisi:event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input type="text"
                               className="form-control"
                               id="auteur"
                               value={this.state.auteurSaisi}
                               onChange={(event) => this.setState({auteurSaisi:event.target.value})}
                        />
                    </div>
                        <div className="form-group">
                            <label htmlFor="nbPages">Nombres de pages</label>
                            <input type="text"
                                   className="form-control"
                                   id="NbPages"
                                   value={this.state.nbPagesChoisi}
                                   onChange={(event) => this.setState({nbPagesChoisi:event.target.value})}
                            />
                        </div>
                    <Bouton typeBtn="btn-primary" clic={this.handleValidationForm}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;