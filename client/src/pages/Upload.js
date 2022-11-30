import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Axios from 'axios';

/**
 * Fonction qui construit la page d'Upload.
 * Cette page permet d'uploader un fichier JSON de produits dans la base de données.
 * @returns le rendu de la page d'upload
 */
export default function Upload() {

    const [file, setFile] = useState();

    const handleChange = (e) =>{
        // on récupère le fichier JSON à chaque changement
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Envoi du fichier...");

        // on stocke le fichier dans un objet FormData pour pouvoir l'envoyer à la base de données
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        Axios.post('http://localhost:3001/api/upload', formData).then((response) => {
            alert(response.data);
            console.log(response.data);
        });
    }

    return (
        <div className="formUpload">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>ProdShop - Chargement produits</title>
            </Helmet>
            <div className="enseigne">
                <p>Upload</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="formElmt">
                    <label for="upload">Sélectionner votre fichier</label>
                    <input type="file" onChange={handleChange} id="upload" accept='.json' pattern=".+\.json" name="upload"  required/>
                </div>

                <div class="button">
                    <input type="submit" id="submit" value="Importer"/>
                    <Link to= "/"><button>Accueil</button></Link>
                </div>
            </form>
        </div>
        
    );
}