import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Select from 'react-select';
import Helmet from 'react-helmet';

/**
 * Fonction qui construit la page d'ajout d'un produit.
 * @returns le rendu de la page d'ajout
*/
export default function Ajout(){

    const nomCat = [];
    const [categories, setData] = useState([]);
    useEffect(() => {
            Axios.get('http://localhost:3001/api/getCat').then((response) => {
                setData(response.data)
            });
    }, []);

    for(let i = 0; i < categories.length; i++){
        nomCat.push({value: categories[i].idCat, label: categories[i].nom_cat});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        let categorie = e.target.categorie.value;
        let nom = e.target.nom.value;
        let prix = e.target.prix.value;
        let stock = e.target.stock.value;
        let descript = e.target.descript.value;

        // on vérifie que les informations saisies sont bien passées
        // console.log(categorie, nom, prix, stock);

        // on crée un objet qui contient les données du formulaire
        let newProd = {
            categorie: categorie,
            prix: prix,
            stock: stock,
            nom: nom,
            descript: descript
        }
        
        // on le passe à la base de données via une requête POST avec un message d'alerte en cas de succès
        Axios.post('http://localhost:3001/api/insert', newProd).then((res)=>{alert (res.data)});
    }
    
    
    return (
        <div className="formAjout">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ProdShop - Ajout Produit</title>
            </Helmet>
            <div className="enseigne">
                <p>Ajout de produit</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="formElmt">
                    <label for="categorie">Catégorie</label>
                    <Select options={nomCat} placeholder="Sélectionner une catégorie..." id="categorie" name="categorie"  required/>
                </div>

                <div class="formElmt">
                    <label for="prix">Prix (€)</label>
                    <input type="number" id="prix" name="prix" placeholder="ex : 79.99" min="0" max="10000" step="0.01" required/>
                </div>

                <div class="formElmt">
                    <label for="stock">Stock</label>
                    <input type="number" id="stock" name="stock" placeholder="ex : 0 (si aucun article de ce produit en stock)" min="0" max="1000" required/>
                </div>

                <div class="formElmt">
                    <label for="nom">Nom du produit</label>
                    <input type="text" id="nom" name="nom" placeholder="ex : Clavier Logitech G213" pattern="[a-zA-Z0-9\-\s]{8,}" required/>
                </div>

                <div class="formElmt">
                    <label for="descript">Description</label>
                    <input type="text" id="descript" name="descript" placeholder="ex : Produit de la marque..." pattern="[A-Za-zÀ-ÖØ-öø-ÿ-\s\:,]{8,}"/>
                </div>

                <div class="button">
                    <input type="submit" id="submit" value="Ajouter"/>
                    <Link to= "/"><button>Accueil</button></Link>
                </div>
            </form>
            
            
        </div>
    )
}