const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


router.use('/', usuarioController);


module.exports = router;