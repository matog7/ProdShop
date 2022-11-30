import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Helmet from 'react-helmet';


export default function Modifier() {

    // on récupère le nom du produit à modifier
    const [nomProd, setNomProd] = useState("");
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getProdAmodif').then((response) => {
            setNomProd(response.data)
        });
    }, []);

    // on récupère les données de tous les produits...
    const [produit, setData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/prodInfo').then((response) => {
            setData(response.data)
        });
    }, []);
    //... puis celles du produit à modifier pour les passer dans les inputs
    for (let i = 0; i < produit.length; i++) {
        if (produit[i].nom === nomProd) {
            var prix = produit[i].prix;
            var stock = produit[i].stock;
            var image = produit[i].url;
            var descript = produit[i].descript;    
        }
    }
    console.log(prix, stock, image);

    // maj du produit
    const handleSubmit = (e) => {
        e.preventDefault();
        let nom = nomProd;
        let prix = e.target.prix.value;
        let stock = e.target.stock.value;

        // on crée un objet qui contient les données du formulaire
        let majProd = {
            nom: nom,
            prix: prix,
            stock: stock
        }
        
        // on le passe à la base de données via une requête POST avec un message d'alerte en cas de succès
        Axios.post('http://localhost:3001/api/modifProduit', majProd).then((res)=>{
            alert (res.data);
        });
    }

    return (
        <div className="formModif">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>ProdShop - Modification Produit</title>
                </Helmet>
                <div className="enseigne">
                    <p>MAJ produit</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="infos">
                        <p className="prod">{nomProd.toUpperCase()}</p>
                        <div className="display">
                            <img src={image} alt="image produit" className="imgProduit"/>
                            <p>{descript+"."}</p>
                        </div>
                        
                    </div>

                    <div class="formElmt" >
                        <label for="prix">Prix (€)</label>
                        <input type="number" id="prix" name="prix" placeholder={prix} min="0" max="10000" step="0.01" required/>
                    </div>

                    <div class="formElmt">
                        <label for="stock">Stock</label>
                        <input type="number" id="stock" name="stock" placeholder={stock + " article(s)."} min="0" max="1000" required/>
                    </div>

                        
                    <div class="button">
                        <input type="submit" id="submit" value="Mettre à jour"/>
                        <Link to= "/recherche"><button>Retour</button></Link>
                    </div>
                </form>
                
                
            </div>
    );
}