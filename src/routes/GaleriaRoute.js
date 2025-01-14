const express = require('express');
const router = express.Router();
const GaleriaController = require('../controllers/GaleriaController.js');

router.get('/imagens', GaleriaController.getAllImages);
router.post('/imagens', GaleriaController.createImage);
router.delete('/imagens/:imagemId', GaleriaController.deleteImage);

module.exports = router;
