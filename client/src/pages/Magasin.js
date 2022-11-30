import React from 'react';
import Menu from '../components/Menu';
import SearchBar from '../components/SearchBar';
import logo from '../static/icon/logo.png';
import Helmet from 'react-helmet';

/**
 * Classe qui construit le magasin (le menu et sa barre de recherche)
 */
export default class Magasin extends React.Component {

  /**
   * Constructeur de la classe Magasin, initialisant l'état du filtre de recherche et de la case à cocher.
   * Il est appelé avant le premier rendu de la classe et .
   * Si cette case est cochée, seul les produits en stock sont affichés.
   * @param {*} props les données passées en paramètre
   */
  constructor(props) {
    super(props);
    this.state = {
      filtreRec: '', // le filtre de recherche
      enStockSeul: false // le booléen qui indique si on affiche les produits en stock uniquement
    }
    // Si fonction non fléchée : 
        // on lie la fonction de mise à jour de l'état à la classe, permettant d'utiliser le mot clé this dans la classe enfant searchBar
        // this.handleFiltreRecChange = this.handleFiltreRecChange.bind(this);
        // this.handleEnStockChange = this.handleEnStockChange.bind(this);
        // ensuite, on les initialise dans le constructeur de la classe enfant searchBar, tout comme dans la classe parent

    // Sinon : 
        // les fonctions fléchées permettent de lier automatiquement la fonction à la classe 
        // il est donc pas nécessaire de créer un constructeur et de lier les fonctions
        // cependant, nous devons rééecrire ces fonctions fléchées dans la classe enfant searchBar enfin d'accéder à l'état de la classe parente
  }

  /**
   * Méthode définissant le filtre, si celui-ci change lorsqu'on tape dans la barre de recherche
   * @param {*} filtreRec le nouveau filtre de recherche afin de filtrer l'affichage
   */
  handleFiltreRecChange = (filtreRec) => {
    this.setState({
      filtreRec: filtreRec
    });
  }
  
  /**
   * Méthode définissant le booléen de stockage, celui-ci change lorsqu'on coche la checkbox.
   * Il détermine si l'on affiche ou non uniquement les produits en stock.
   * @param {*} enStockSeul booléen qui indique si on affiche les produits en stock uniquement
   */
  handleEnStockChange = (enStockSeul) => {
    this.setState({
      enStockSeul: enStockSeul
    })
  }

  render(){
    // On va donc passé ces valeurs d'états où elles seront utilisées (la barre de recherche et le menu d'affichage)
    // C'est sur celui-ci que la recherche filtrée s'applique.
    return (
        
        <div className="magasin">
          <Helmet>
              <title>ProdShop - Accueil</title>
          </Helmet>
          <div className="enseigne">
            <img src={logo} alt="logo" className="logomag"/>
            <p>ProdShop</p>
          </div>
          <SearchBar // ici, on passe ces props à la classe searchBar que celle-ci pourra utiliser
            filtreRec = {this.state.filtreRec}
            enStockSeul = {this.state.enStockSeul}
            onFiltreRecChange={this.handleFiltreRecChange} // on passe la méthode à la classe enfant searchBar (fonction de rappel)
            onEnStockChange={this.handleEnStockChange} // idem
          />
          <div className="scroll_menu">
            <Menu // idem
              produits={this.props.produits}
              filtreRec = {this.state.filtreRec}
              enStockSeul = {this.state.enStockSeul}
            />
          </div>
        </div>
      
    );
  }

}