/**
 * Script de configuration des routes d'accès aux controllers
 */

const express = require('express');
const router  = express.Router();

// on importe les controllers
const catController = require('./controller/CatController');
const prodController = require('./controller/ProdController');
const uploadController = require('./controller/UploadController');
const modifController = require('./controller/ModifController');

// on définit les routes
// catégorie :
router.get('/getCat', catController.getCat);

// produit :
router.get('/getProduits', prodController.getProduits);
router.post('/insert', prodController.insert);

// upload :
router.post('/upload', uploadController.upload);

// modification :
router.get('/prodInfo', modifController.prodInfo);
router.post('/prodAmodif', modifController.prodAmodif);
router.get('/getProdAmodif', modifController.getProdAmodif);
router.post('/modifProduit', modifController.modifProduit);


module.exports = router;
