// Requerimientos

// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor nuevo
// 3.- Escribir en el archivo inventors.json
// 4.- Leer el archivo y mostrarlo en consola de forma asincrona

const fs = require('fs');
const path = '.././fileSystem/inventors.json';

// 1.- Leer archivo
fs.readFile(path,'utf8',(err, data) => {
    if(!err){
        data = JSON.parse(data);
        // 2.- insertar un nuevo inventor
        data.inventors.push({
            first: "Rene",
            last: "Favaloro",
            year: 1923
        });
        // 3.- escribir archivo
        fs.writeFile(path, JSON.stringify(data,null,' '), err => {
            if(!err){
                // 4.- lectura de archivo
                fs.readFile(path,'utf8', (err,data)=> {
                    if(!err){
                        console.log(JSON.parse(data));
                    }
                })
            }
        })
    }
});