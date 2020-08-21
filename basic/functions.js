// Tipos de declaracion de funciones
// la forma mas simple

function add(a,b) {
    return a+b;
}

// asignando a una variable

const square = function(x) {
    return x*x;
}

square(2);

// ES6 hay una nueva forma de declarar funciones, la funcion flecha/arrow function =>

const getSum = (a,b) => {
    return a+b;
};

const getSum2 = (a,b) => a+b;

// () => {instrucciones}
// (parametros) => expresion
// (parametro1, parametro2, etc) => {instruccion, return}



