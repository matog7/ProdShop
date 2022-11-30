import React from 'react';
import ColProduitRec from './ColProduitRec';

/**
 * Fonction composante des résultats de la recherche (sur la page de recherche)
 */
export default function Resultat (props) {
    
    // pour stocker les produits afin de pouvoir les afficher
    const rows = [];

    // pour afficher l'entête du tableau seulement si il y a des résultats
    const enTete = ["En attente de résultats..."];

    // filtre de recherche
    const filtre = props.filtre; 

    // remplissage du résultat de la recherche avant de l'afficher
    props.produits.forEach((produit) => {
        

        // on vérifie si le filtre correspond à un ou plusieurs produits à partir de leur première lettre
        // si c'est le cas, on affiche le ou les produits
        if (produit.nom.toUpperCase().indexOf(filtre.toUpperCase()) === 0 && filtre !== "") {
            rows.push(
                <ColProduitRec
                produit={produit}
                key={produit.nom} />
            );
        } // sinon, on affiche un message d'erreur
        else if (produit.nom.indexOf(filtre) === -1 && filtre !== "") {
            enTete[0] = "Aucun résultat.";
        }
    });

    // et s'il y a des résultats, on affiche l'entête du tableau en remplacant le message d'attente
    if (rows.length > 0) {
        enTete[0] = (
            <tr>
                <th className="header">Nom</th>
                <th className="header">Prix</th>
                <th className="header">Stock</th>
            </tr>
        );
    } 

    return (
      <table className="menu">
        <thead>
          {enTete}
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}

