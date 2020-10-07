// /home
// /api/inventors
// /api/inventors/Juan
// /api/inventors/Nombre/Juan?ciudad=La Paz

const express = require('express');
const chalk = require('chalk');
const PORT = 3000;
const app = express();

// /?Nombre=Pablo&Apellido=Fernandez

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><head>
            <body>
                HOME DE API REST CON EXPRESS
                <h1>Nombre: ${req.query.Nombre} </h1>
                <h1>Apellido: ${req.query.Apellido} </h1>
            </body>
        </html>
    `);
});

app.get('/api/inventors/:id/:name', (req, res) => {
    res.send(`
        <html>
            <head><head>
            <body>
                HOME DE API REST CON EXPRESS
                <h1>Id: ${req.params.id} </h1>
                <h1>Name: ${req.params.name} </h1>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(chalk.bgGreenBright.yellow('Server de express levantado'))
});