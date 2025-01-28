const express = require('express');
const router = express.Router();
const ImagemController = require('../controllers/ImagemController');

// lista uma imagem especifica
router.get('/imagens/:id', async (req, res) => {
    try {
        await ImagemController.getImagemById(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

// lista todas as imagens
router.get('/imagens', ImagemController.getAllImagem);

// cria uma imagem
router.post('/imagens', ImagemController.createImagem);

// deleta uma imagem
router.delete('/imagens/:id', ImagemController.deleteImagem);

module.exports = router;
