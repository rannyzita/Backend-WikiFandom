const express = require('express');
const router = express.Router();
const ImagemController = require('../controllers/ImagemController');

// lista uma imagem especifica
router.get('/imagem/:id', async (req, res) => {
    try {
        await ImagemController.getImagemById(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

// lista todas as imagens
router.get('/imagens', ImagemController.getAllImages);

// cria uma imagem
router.post('/imagens', ImagemController.create);

// deleta uma imagem
router.delete('/imagens/:id', ImagemController.delete);

module.exports = router;
