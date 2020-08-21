// let vs var

// let es la forma actual de declarar variables ES6
// var queda limitado para legacy (cosas heredadas)

let x = 1;
if(x === 1) {
    let x = 2; // es otra variable
    //console.log('x dentro del bloque ' + x);
}


//console.log('x fuera del bloque ' + x);

const key = 'abc123';

// const por defecto si no la voy a modificar
// si lo voy a modificar declaro con let nunca con var

const person = {
    name: "wes",
    age: 28
}

person.age = 44;
console.log(person);

const wez = Object.freeze(person);
wez.name = "Juan";
console.log(wez);





