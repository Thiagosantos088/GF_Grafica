const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db'); // arquivo de conexão com o banco de dados

// Rota para registro de usuário
router.post('/register', async (req, res) => {
  const { nome, email, senha, idFunc } = req.body;

  // Hash da senha
  const hashedPassword = await bcrypt.hash(senha, 10);

  // Inserir usuário no banco de dados
  db.query(
    'INSERT INTO tbUsuario (nome, email, senha, idFunc) VALUES (?, ?, ?, ?)',
    [nome, email, hashedPassword, idFunc],
    (err, result) => {
      if (err) {
        console.error('Erro ao registrar usuário:', err);
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
      }
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    }
  );
});

// Rota para login de usuário
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Buscar usuário no banco de dados
  db.query('SELECT * FROM tbUsuario WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ message: 'Erro ao buscar usuário' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const user = results[0];

    // Comparar senha
    const match = await bcrypt.compare(senha, user.senha);
    if (!match) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.idUsu, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  });
});

module.exports = router;
