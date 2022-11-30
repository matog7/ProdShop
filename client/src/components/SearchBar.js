import React from 'react';
/**
 * Classe qui construit la barre de recherche
 */
export default class SearchBar extends React.Component {

  /**
   * Fonction de rappel qui appelle la méthode de la classe parente (Magasin) pour mettre à jour le filtre de recherche 
   * @param {*} e l'évenement (le changement de valeur dans la barre de recherche)
   */
  handleFiltreRecChange = (e) => {
    this.props.onFiltreRecChange(e.target.value);
  }

  /**
   * Fonction de rappel qui appelle la méthode de la classe parente (Magasin) pour mettre à jour le booléen d'affichage des produits en stock uniquement
   * True : affiche uniquement les produits en stock
   * False : affiche tous les produits
   * @param {*} e l'évenement (le changement de valeur dans la case à cocher)
   */
  handleEnStockChange = (e) =>{
    this.props.onEnStockChange(e.target.checked);
  }

  render(){
    return ( // on va récupérer les données que l'on souhaite dans les props passés à la classe (filtreRec et enStockSeul)
      <form className="filtre">
        <input type="text" placeholder="Recherche..." value={this.props.filtreRec} onChange={this.handleFiltreRecChange}/> 
        <p>
          <input type="checkbox" checked={this.props.enStockSeul} onChange={this.handleEnStockChange}/>
          Produits en stock uniquement
        </p>
      </form>
    );
  }
}