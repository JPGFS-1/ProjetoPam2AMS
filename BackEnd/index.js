const express = require('express');
const app = express();
const port = 3000;

// rota (get/post/put/delete)
// raiz
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});