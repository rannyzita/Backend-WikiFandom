const express = require('express');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.post('/registro', authController.registro);
router.post('/login', authController.login);

module.exports = router;
