/**
 * Controller sur les catégories
*/

const database = require('../controller/mySqlConnection');
const db = database.db;

const getCat = (req, res) => {
    const select = "SELECT * FROM categorie ORDER BY idCat;";

    db.query(select, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Catégories : ", result);
            res.send(result);
        }
    });
};

module.exports = {getCat};