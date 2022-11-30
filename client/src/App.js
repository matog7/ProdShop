import Axios from "axios";
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ajout from "./pages/Ajout";
import Magasin from "./pages/Magasin";
import Upload from "./pages/Upload";
import NavBar from "./components/NavBar";
import Recherche from "./pages/Recherche";
import Modifier from "./pages/Modifier";
import Parametre from "./pages/Parametre";


/**
 * Fonction définissant les routes de l'application
 * @returns les routes de l'application
 */
export default function App () {

    // ici on récupère les données de la base de données
    const [data, setData] = useState([]);
    useEffect(() => {
            Axios.get('http://localhost:3001/api/getProduits').then((response) => {
                setData(response.data)
            });
    }, []);

    return (
        <div className="app">
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<Magasin produits = {data} />} /> 
                    <Route path="/ajout" element={<Ajout />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/recherche" element={<Recherche produits = {data} />} />
                    <Route path="/modification" element={<Modifier />} />
                    <Route path="/parametre" element={<Parametre />} />
                </Routes>
            </Router>
        </div>
    )
}