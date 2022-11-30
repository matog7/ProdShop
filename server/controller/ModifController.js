/**
 * Controller sur la modification d'un produit
*/

const database = require('../controller/mySqlConnection');
const db = database.db;
let modif = null;

const prodInfo = (req, res) => {
    const select = "SELECT nom, stock, prix, descript, url from Produit ;";

    db.query(select, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Les infos produits : ", result);
            res.send(result);
        }
    });
};

const prodImg = (req, res) => {
    const select = "SELECT distinct(url) from Produit;";

    db.query(select, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Les images produits : ", result);
            res.send(result);
        }
    });
};

const prodAmodif = (req, res) => {
    modif = req.body.nom;
    console.log("Le nom du produit à modifier : ", modif);
    res.send("Vous allez modifier la fiche produit de : " + modif);
};

const getProdAmodif = (req, res) => {
    console.log(modif, "est à modifier.");
    res.send(modif);
}

const modifProduit = (req, res) => {
    const nom = req.body.nom;
    const stock = req.body.stock;
    const prix = req.body.prix;
    const maj = "UPDATE Produit SET stock = ?, prix = ? WHERE nom = ? ;";

    db.query(maj, [stock, prix, nom], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Mise à jour : ", result);
            res.send("Le produit " + nom + " a bien été mis à jour.");
        }
    });
};

module.exports = {prodInfo, prodImg, prodAmodif, getProdAmodif, modifProduit};
