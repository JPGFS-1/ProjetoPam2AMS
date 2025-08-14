// incluir o banco
const db = require('./conf/autenticacao.js');
const express = require('express');
let body = require('body-parser');
let cors = require('cors');
let methodOverride = require('method-override');
const app = express();
const port = 3000;

// rota (get/post/put/delete)
// raiz
app.get('/', (req, res) => {
  res.send({"text":'Hello World!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});