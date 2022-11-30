import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './static/css/index.css';
import './static/css/magasin.css';
import './static/css/ajout.css';
import './static/css/upload.css';
import './static/css/navbar.css';
import './static/css/recherche.css';
import './static/css/modif.css';

// Création de la racine de l'application et affichage de celle-ci.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

