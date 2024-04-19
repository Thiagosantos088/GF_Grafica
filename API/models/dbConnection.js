const mysql = require('mysql');

const conecta = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbGFGrafica'
});

conecta.connect((err) => {
    if(err){
        console.log("Erro ao conectar ao banco: ", err);
        reject(err);
        return;
    }
    console.log('Conectado do banco. ;)');
});

    module.exports =  conecta;

