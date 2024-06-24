const express = require('express');
const router = express.Router();
const dbConecta = require('../models/dbConnection');

// Rota GET para obter todos os usuários
router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM tbUsuario', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Rota POST para adicionar um novo usuário
router.post('/', (req, res) => {
    const { idUsuario, nome, email, tel } = req.body;
    const query = 'INSERT INTO tbUsuario (idUsu, nome, email, tel) VALUES (?,?,?,?)';

    dbConecta.query(query, [idUsuario, nome, email, tel], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao adicionar usuário.' });
        } else {
            res.status(201).json({
                message: 'Usuario adicionado!',
                idUsuario: result.insertId,
                body: req.body
            });
        }
    });
});

// Rota POST para login
router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM tbUsuario WHERE email = ? AND senha = ?';

    dbConecta.query(query, [email, senha], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao verificar usuário.' });
        } else {
            if (result.length > 0) {
                res.status(200).json({ message: 'Login bem-sucedido!', user: result[0] });
            } else {
                res.status(401).json({ message: 'Credenciais inválidas.' });
            }
        }
    });
});

module.exports = router;
