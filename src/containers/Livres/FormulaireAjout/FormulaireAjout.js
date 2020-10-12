import React, {Component} from "react";
import Bouton from "../../../components/Bouton/Bouton";
import {withFormik} from "formik";
import * as Yup from "yup";

class FormulaireAjout extends Component{
    //state = {
    // titreSaisi : "",
      //  auteurSaisi: "",
       // nbPagesChoisi : ""
    //}

    // handleValidationForm = (event) => {
        // event.preventDefault();
        //     this.props.validation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nbPagesChoisi);
        //     this.setState({
        //         titreSaisi : "",
        //         auteurSaisi: "",
        //         nbPagesChoisi : ""
        //     })
        // }

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
                               name='titre'
                                value={this.props.values.titre}
                                onChange={this.props.handleChange}
                               onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.titre && this.props.errors.titre
                            && <span style={{color:"red"}}>{this.props.errors.titre}</span>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input type="text"
                               className="form-control"
                               id="auteur"
                               name='auteur'
                               value={this.props.values.auteur}
                               onChange={this.props.handleChange}
                               onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.auteur && this.props.errors.auteur
                            && <span style={{color:"red"}}>{this.props.errors.auteur}</span>
                        }
                    </div>
                        <div className="form-group">
                            <label htmlFor="nbPages">Nombres de pages</label>
                            <input type="text"
                                   className="form-control"
                                   id="NbPages"
                                   name='nbPages'
                                   value={this.props.values.nbPages}
                                   onChange={(event) => this.props.setFieldValue('nbPages', +event.target.value)}
                                   onBlur={this.props.handleBlur}
                            />
                            {
                                this.props.touched.nbPages && this.props.errors.auteur
                                && <span style={{color: "red"}}>{this.props.errors.nbPages}</span>
                            }
                        </div>
                    <Bouton typeBtn="btn-primary" clic={this.props.handleSubmit}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default withFormik({
        mapPropsToValues: () => ({
                titre:'',
                auteur:'',
                nbPages:'',
        }),
    validationSchema : Yup.object().shape({
        titre : Yup.string()
            .min(3,'le titre doit avoir plus de 3 caractères')
            .max(15, 'le titre doit avoir plus de 15 caractères')
            .required("le titre est requis"),
        auteur: Yup.string()
            .min(3,"l auteur doit avoir plus de 3 caractères")
            .required("l auteur est requis"),
        nbPages: Yup.number()
            .lessThan(1000,'Nombre de pages > 1000')
            .moreThan(50,'Nombre de pages < 50')

    }),
        // validate: values => {
        //     const errors = {};
        //     if(values.titre.length < 3){
        //         errors.titre ="Le titre doit avoir plus de 3 caractères "
        //     }
        //     if(values.titre.length > 15){
        //         errors.titre ="Le titre doit avoir moins de 15 caractères "
        //     }
        //     if(!values.auteur.length < 3){
        //         errors.auteur ="Le champ auteur est obligatoire "
        //     }
        //     return errors;
        // },
        handleSubmit:(values, {props}) => {
            props.validation(values.titre,values.auteur,values.nbPages);
        }
    }
)(FormulaireAjout);