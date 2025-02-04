const express = require('express');
const router = express.Router();
const NoticiaController = require('../controllers/NoticiaController.js');

router.get('/noticias', NoticiaController.getAllNoticias);
router.post('/noticias', NoticiaController.createNoticia);
router.delete('/noticias/:id', NoticiaController.deleteNoticia);
router.put('/noticias/:id', NoticiaController.updateNoticia);

module.exports = router;
