import React from 'react';
/**
 * Classe qui construit la ligne de produit
 */
export default class ColProduit extends React.Component {

  /**
   * Méthode d'affichage d'une ligne produit dans le Menu du Magasin
   * @returns {JSX.Element} contenu de la ligne de produit, avec son nom et son prix et si celui-ci est épuisé
   */
  render () {
    const produit = this.props.produit;

    // On affiche le nom du produit, son prix et si celui-ci est épuisé ou non
    const name = produit.stock ? produit.nom : <span className="epuise">{produit.nom} (épuisé)</span>;

    if (produit.stock !== 0){
      return ( // td = table data
        <tr>
          <td className= "nom_prod">{name}</td>
          <td className= "prix_prod">{produit.prix + "€"}</td>
        </tr>
      );
    } else {
      return ( // td = table data
          <tr>
            <td className= "nom_prod">{name}</td>
            <td className= "prix_prod_epuise">{produit.prix + "€"}</td>
          </tr>
      );
    }
  }
}