const express = require('express');
const router = express.Router();
const dbConecta = require('../models/dbConnection');

router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbusuario', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});