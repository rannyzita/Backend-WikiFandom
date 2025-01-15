const express = require('express');
const router = express.Router();
const NoticiaController = require('../controllers/NoticiaController.js');

router.get('/news', NoticiaController.getAllNoticias);
router.post('/news', NoticiaController.createNoticia);
router.delete('/news/:id', NoticiaController.deleteNoticia);

module.exports = router;
