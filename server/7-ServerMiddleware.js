// Codigo que esta en medio entre la peticion del usuario y la respuesta
// sirve para aplicar logica, modificar la respuesta, etc

const express = require('express');
const chalk = require('chalk');
const moment = require('moment');

const app = express();
const PORT = 3000;

/*
app.use('/', (req, res, next) => {
    if(req.query.token == 'abcde123') {
        next();
    } else {
        res.status(401).send('Login fail');
    }    
});
*/

app.use('/public', express.static('./public'));

/*
app.get('/', (req, res, next) => {
    console.log('Por Aca Paso: app.get /');
    res.send(`Respuesta de servidor`);
    //next();
});
*/
/*
app.get('/', (req, res) => {
    console.log('Por Aca 2 Paso: app.get /');
    res.send(`Respuesta de servidor`);
});
*/
app.get('/', (req, res) => {    
    res.send(`
        <html>
            <head>
                <link href="public/style.css" type="text/css" rel="stylesheet" />
            </head>
            <body>
                <h1> Hola mundo </h1>
            </body>
        </html>
    `);
});

app.listen(PORT, () => { console.log(chalk.bgGreenBright.yellow('Servidor Web Disponible')) });


