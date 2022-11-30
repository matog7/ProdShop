import React from 'react';
import Helmet from 'react-helmet';
import Resultat from '../components/Resultat';

export default function Recherche (props) {

    const [filtreRec, setFiltreRec] = React.useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setFiltreRec(e.target.value);
    }

    return (
        <div className="formRec">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>ProdShop - Recherche produit</title>
            </Helmet>
            <div className="enseigne">
                <p>Recherche</p>
            </div>
            <form>
                <div class="formElmt">
                    <label for="recherche">Recherche produit</label>
                    <input type="text" placeholder="Recherche..." onChange={handleChange} name="recherche"/> 
                </div>
            </form>
            <div class="scroll_rec">
                <Resultat produits={props.produits} filtre={filtreRec}/>
            </div>
        </div>
    )
}