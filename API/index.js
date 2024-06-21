const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Thiago',
  password: '123456', // substitua pela sua senha
  database: 'dbGFGrafica'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados, vamoooooos');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
