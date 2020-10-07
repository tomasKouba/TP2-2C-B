// simular un front end

const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.use('/assets', express.static('./public'));

app.get('/', (req, res) => {
    res.render('index', {nombre: "Tomas Kouba"});
});

app.listen(PORT, () => { console.log(chalk.bgGreenBright.yellow('Servidor Web Disponible')) });