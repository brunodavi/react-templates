require('dotenv').config();

const express = require('express');
const { createEngine } = require('express-react-views');

const app = express();

const { PORT = 3000 } = process.env;

app.set('views', `${__dirname}/views`);

app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

app.get('/', (_req, res) => {
 res.render('index.jsx');
});

app.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});
