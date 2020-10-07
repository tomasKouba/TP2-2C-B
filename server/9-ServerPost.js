const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

//Middleware para parsear el json que llega del body
app.use(express.json());

app.post('/inventors', (req, res) => {
    
    res.send(`
        ${req.body.first}
        ${req.body.last}
        ${req.body.year}
    `);

    console.log(req.body.first);
    console.log(req.body.last);
    console.log(req.body.year);
    
   //console.log(req);
});

app.listen(PORT, () => { console.log(chalk.bgGreenBright.yellow('Servidor Web Disponible')) });