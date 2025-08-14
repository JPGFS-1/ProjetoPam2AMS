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

async function selectFull() {
    const query = 'SELECT * FROM Clientes';
    return new Promise((resolve, reject) => {
        cn.query(query, (err, results, fields) => {
            if (err) {
                console.log('Erro ao consultar o banco de dados:', err);
                reject(err);
            } else {
                //console.log(JSON.parse(JSON.stringify(results)));
                resolve(JSON.parse(JSON.stringify(results)));
            }
        });
    });
}

// ROTEAMENTO PARA INSERIR
async function insertClient(Nome, Idade, UF) {
    const query = 'INSERT INTO Clientes (Nome, Idade, UF) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        cn.query(query, [Nome, Idade, UF], (err, results) => {
            if (err) {
                console.log('Erro ao inserir o registro:', err);
                reject(err);
            } else {
                console.log('Registro inserido com sucesso!', results);
                resolve(results);
            }
        });
    });
}

connectToDatabase();
selectFull();