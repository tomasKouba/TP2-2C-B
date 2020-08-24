function imprimirEscalera (escalones) {
    
    for (let index = 1; index <= escalones; index++) {
        let escalon = Array(index);
        let espacio = Array(escalones-index);
        escalon.fill("#");
        espacio.fill(" ");
        console.log(espacio.join("") + escalon.join(""));
        
    }
}

imprimirEscalera(3);
imprimirEscalera(6);
imprimirEscalera(10);
imprimirEscalera(100);