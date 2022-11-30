import React from 'react';

// les icons
import logo from '../static/icon/logo.png';
import home from "../static/icon/accueil.png";
import add from "../static/icon/add.png";
import upload from "../static/icon/upload.png";
import search from "../static/icon/recherche.png";
import param from "../static/icon/parametre.png";

/**
 * Fonction composante (anciennement une classe) affichant la barre de navigation
*/
export default function NavBar () {
    return (
        <nav>
            <li>
                <a class="logo-item"><img src={logo} alt="logo" class="logo"/>
                    <p>ProdShop</p>
                </a>
            </li>
            <li>
                <a href="/"><img src={home} alt="Accueil" class="icon"/>
                    <span class="nav-item">Accueil</span>
                </a>
            </li>
            <li>
                <a href="/ajout"><img src={add} alt="Ajout" class="icon"/>
                    <span class="nav-item">Ajout produit</span>
                </a>
            </li>
            <li>
                <a href="/upload"><img src={upload} alt="Upload" class="icon"/>
                    <span class="nav-item">Upload</span>
                </a>
            </li>
            <li>
                <a href="/recherche"><img src={search} alt="Recherche" class="icon"/>
                    <span class="nav-item">Recherche produit</span>
                </a>
            </li>
            <li className="last">
                <a href="/parametre"><img src={param} alt="Paramètres" class="icon"/>
                    <span class="nav-item">Paramètres</span>
                </a>
            </li>
        </nav>
  );
}