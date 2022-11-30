import React, {useEffect, useState} from 'react';
import ColCategorieProduit from './ColCategorieProduit';
import ColProduit from './ColProduit';
import Axios from 'axios';

/**
 * Fonction composante (anciennement une classe) affichant le menu des produits
 */
export default function Menu (props) {
  
    // Ici, on récupère les catégories depuis la base de données
    const [categories, setData] = useState([]);
    useEffect(() => {
            Axios.get('http://localhost:3001/api/getCat').then((res) => { // on récupère le 'res' envoyer en retour par le serveur
                setData(res.data)
            });
    }, []);

    const rows = [];
    let lastCategory = null;
    const enTete = [
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    ];

    // test -> console.log("test categories", categories);

    const filtre = props.filtreRec; // filtre de recherche
    const stocke = props.enStockSeul; // booléen de stockage

    // remplissage des colonnes du menu avant de l'afficher
    props.produits.forEach((produit) => {
      
      // on vérifie la bonne récupération des données
      // console.log(produit.cat, produit.nom, produit.prix, produit.stock);
      
      if (produit.nom.toUpperCase().indexOf(filtre.toUpperCase()) === -1) { // si le filtre ne correspond à aucun produit 
        return;
      } 
      else if (stocke && !produit.stock) { // vérifie la cohérence entre le filtre et le stockage
        return;
      } 
      else if (produit.cat !== lastCategory) {

        // on recherche le nom de la catégorie à partir de la clé de celle-ci
        let nomCat = null;
        for(let i = 0; i < categories.length; i++){
          if (produit.cat === categories[i].idCat){
            nomCat = categories[i].nom_cat;
          }
        }

        rows.push(
          <ColCategorieProduit
            categorie={nomCat}
            key={produit.cat} />
        );
      }
        rows.push(
          <ColProduit
            produit={produit}
            key={produit.nom} />
        );
        lastCategory = produit.cat;
    });

    // on vérifie si le tableau est vide, si c'est le cas, on affiche un message d'erreur
    if (rows.length === 0) {
      enTete[0] = "Aucun résultat.";
    }

    return (
      <table className="menu">
        <thead>{enTete}</thead>
        <tbody>{rows}</tbody>
      </table>
    );
}

