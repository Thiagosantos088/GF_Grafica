const express = require('express');

const app = express();
const cors = require("cors")

const port = 3000

app.use(cors());

app.get('/', (req,res) => {
res.json({message: 'Oba! rodou :)'});
});

app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});



