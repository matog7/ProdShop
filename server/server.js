const Express = require('express'); // Express web server framework
const App = Express();
const bodyParser = require('body-parser'); // npm install body-parser
const cors = require('cors'); // npm install cors 
const fileUpload = require('express-fileupload'); // npm install express-fileupload 
const controller = require('./config'); // importe le fichier de configuration des routes

// instanciation des middlewares (fonctions qui s'exécutent avant les routes)
App.use(bodyParser.urlencoded({extended: true})); // permet de récupèrer les donnnées passées en requête d'une méthode POST
App.use(Express.json()); // permet de parser les données reçues en JSON pour ensuite bien les traiter
App.use(cors()); // permet d'autoriser les requêtes cross-origin
App.use(fileUpload()); // permet la gestion de fichiers uploadés
App.use('/api/', controller); // on utilise le fichier de configuration des routes


// lance le serveur sur le port 3001
App.listen(3001, () => {
    console.log("API is running on port 3001...");
});
