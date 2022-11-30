/**
 * Controller sur les produits
*/

const database = require('../controller/mySqlConnection');
const db = database.db;

// on crée une constante qui sera passer à la route (cf config.js) permettant de récupérer les données de la bdd et de les envoyer au client
const getProduits = (req, res) => {
    const select = "SELECT * FROM produit ORDER BY cat;";
    db.query(select, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result); // on envoie les données au client
        }
    });
};



// ajout d'un produit (envoyé depuis le front end)
const insert = (req, res) => { // req étant les données reçues depuis le front end, res ce que l'on envoie en retour

    // on récupère les données du formulaire
    const nom = req.body.nom;
    const categorie = req.body.categorie;
    const prix = req.body.prix;
    const stock = req.body.stock;
    const descript = req.body.descript;

    // on crée une requête SQL pour insérer les données dans la bdd
    const insert = "INSERT INTO produit (prix, cat, nom, stock, descript) VALUES (?,?,?,?,?);";
    db.query(insert, [prix, categorie, nom, stock, descript], (err, result) => {
        if (err) {
            console.log(err);
            res.send('Une erreur s\'est produite lors de l\'ajout du produit.\nRééssayez.');
        } else {
            console.log('Produit ajouté : ', result);
            res.send('Produit ajouté !');
        }
    });
};

module.exports = {getProduits, insert};