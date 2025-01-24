const express = require('express');
const router = express.Router();
const GaleriaController = require('../controllers/GaleriaController.js');

router.get('/galerias', GaleriaController.getAllImages);
router.post('/galerias', GaleriaController.createImage);
router.delete('/galerias/:imagemId', GaleriaController.deleteImage);

module.exports = router;
