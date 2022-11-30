import React from 'react';
import modif from '../static/icon/crayon.png';
import Axios from 'axios';

/**
 * Classe qui construit la méthode d'affichage d'une ligne produit dans le Menu de recherche du Magasin
 */
export default function ColProduitRec (props) {

    const handleClick = () => {
        const name = {nom : produit.nom};
        console.log("click : ", name);
        Axios.post('http://localhost:3001/api/prodAmodif', name).then((res)=>{alert (res.data)});
    }
  
    const produit = props.produit;

    // on vérifie si le produit est épuisé ou non
    const enStock = produit.stock ? produit.stock + " article(s)": <span className="epuise">épuisé</span>;

    return ( // td = table data
    <tr>
        <td className= "nom_prod_rec">{produit.nom}</td>
        <td className= "prix_prod_rec">{produit.prix + "€"}</td>
        <td className= "stock_prod">{enStock}</td>
        <td className= "modif_prod"><a onClick={handleClick} className="btModif" href='/modification'><img class="modif" src={modif}/></a></td>
    </tr>
    );
    
    
}