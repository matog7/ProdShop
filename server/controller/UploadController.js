/**
 * Controller pour l'upload de fichier json
*/

const database = require('../controller/mySqlConnection');
const db = database.db;
const insert = "INSERT INTO produit (prix, cat, nom, stock, descript) VALUES (?, ?, ?, ?, ?);";

// upload d'un fichier JSON et insertion des données dans la bdd
async function upload (req, res) { 
    let uploadedFile = req.files.file;
    
    if (uploadedFile.name.match(/.json/gi) !== null) {
        //console.log("Fichier JSON reçu : ", uploadedFile); // le fichier uploadé

        let fileName = uploadedFile.name;

        await save(uploadedFile, fileName);    
    
        // on récupère le contenu du fichier JSON tout juste uploadé
        const donnees = require(`../upload/${fileName}`);

        // on parcourt le fichier JSON pour récupérer les données en comptant les produits bien uploadés
        const data = donnees.data;
        let uploaded = 0;
        console.log("Données du fichier JSON ", fileName, " : ", data);

        // boucle for pour insérer les produits dans la bdd avec le comptage
        for (let i = 0; i < data.length; i++) {
            await insertUpload(data[i]).then((result)=>{
                if (result === "Ok") {
                    uploaded ++;
                    console.log("Uploaded = ", uploaded);
                }
            });
        }

        // on envoie à la console du client le nombre de produits uploadés et/ou les éventuelles erreurs
        if (uploaded === data.length ) {
            console.log("Tous les produits ont été ajoutés.");
            return res.send(`Fichier uploadé avec succès.\n${uploaded} sur ${data.length} produits ajoutés !`); 
        } else {
            console.log("Erreur lors de l'upload des produits. nb produits uploadés : ", uploaded);
            return res.send(`${uploaded} sur ${data.length} produits ajoutés.
                \nUne erreur s'est produite lors du chargement du fichier produits.
                \nVérifiez le contenu de votre fichier .json.`
            );
        }
    } else {
            return res.send("Le fichier n'est pas au format JSON.");
    }
} 


 // promesse save 
function save(file, fileName){
    return new Promise ((resolve,reject)=>{
        file.mv(`upload/${fileName}`, (err) => {
            if (err) {
                console.log("Erreur sauvegarde : ", err);
                reject();
            } else{ 
                console.log("Fichier uploadé : ", fileName);
                resolve();
            }
        });
    });
}

/**
 * Promesse insertion
 * @param {*} data les données à insérer dans la bdd
 * @returns le résultat de la promesse insertion
 */
function insertUpload(data){
    return new Promise ((resolve,reject)=>{
        db.query(insert, [data.prix, data.categorie, data.nom, data.stock, data.descript], (err, result) => {
            if (err) {
                console.log("Erreur insertion bdd : ", err)
                resolve("Erreur");
            } else {
                console.log('Produit ajouté : ', result);
                resolve("Ok");
            } 
        });
        
    });
    
}




module.exports = {upload};