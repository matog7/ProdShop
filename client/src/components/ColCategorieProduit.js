import React from 'react';
/**
 * Classe qui construit la ligne de catégorie des produits (en tête de tableau)
 */
export default class ColCategorieProduit extends React.Component {
  
  /**
   * Méthode d'affichage de la catégorie dans le Menu du Magasin
   * @returns {JSX.Element} contenu de la ligne de catégorie des produits
   */
  render() {
    const categorie = this.props.categorie; 

    return ( // th = table header
        <tr>
          <th className="categorie" colSpan={2}>{categorie}</th> 
        </tr>
    );
  }
}
