"use strict";
const mysql = require('mysql');
const cn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});
// Função para conectar ao banco de dados
const connectToDatabase = () => {
    cn.connect(function (err) {
        if (err) {
            console.error('Erro a conectar com o banco de dados:', err);
        } else {
            console.log('Conectado com sucesso ao banco de dados!');
        return cn;
        }
    });
}
connectToDatabase();