function imprimirEscalera (escalones) {
    
    for (let index = 1; index <= escalones; index++) {
        let a = imprimirCaracter(" ", escalones-index);
        let b = imprimirCaracter("#", index);
        console.log(a+b);
    }
}

function imprimirCaracter (caracter, cant) {
    let i = 0;
    let result = "";
    while (i < cant) {
        result = result + caracter;
        i++;
    }
    return result;
}

imprimirEscalera(6);
imprimirEscalera(10);
imprimirEscalera(100);
