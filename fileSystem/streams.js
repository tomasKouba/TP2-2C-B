// STREAMS es un flujo de datos
// La ventaja que tiene es que en nodejs, permite leer archivos de a pedazos (chunk)

const fs = require('fs');
const path = './bigfile.txt';


const readable = fs.createReadStream(path, {encoding: 'utf-8', highWaterMark: 1024});

readable.on('data', chunk => {
    console.log("====================================");
    console.log(chunk);
});




