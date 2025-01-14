const express = require('express');
const router = express.Router();
const GaleriaController = require('../controllers/GaleriaController.js')

router.get('/', GaleriaController.getAllImages);
router.post('/', GaleriaController.createImage);
router.delete('/:imagemId', GaleriaController.deleteImage);

module.exports = router;