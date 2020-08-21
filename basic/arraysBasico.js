const miarray = [1,2,3,4,5]; 

const inventors = [
    {first: "Albert", last: "Einstein", year: 1879},
    {first: "Isaac", last: "Newtwon", year: 1643},
    {first: "Galileo", last: "Galilei", year: 1564},
];

//let primerInventor = inventors[0];
//console.log(primerInventor);

//let ultimoInventor = inventors[inventors.length-1];
//console.log(ultimoInventor.first);

// iterar arrays en ES6+
 /*
for (let index = 0; index < inventors.length; index++) {
    const element = inventors[index];
    console.log(element);
    
}


for (const inventor of inventors) {
    console.log(inventor);
}
*/

// agregar elementos al final de un array
let miInventor = {
    first: "Pablo", last: 'Perez', year: 1976
};

inventors.push(miInventor); //agregar al final

let ultimoInventor = inventors.pop(); //sacar el final

let primerInventor = inventors.shift(); //sacar el principio

inventors.unshift(miInventor); //agregar al principio

let inventors2 = inventors.slice(); //hace una copia, vacia un array y lo deposita en el otro

inventors.sort(); // ordenamiento

// Ejercicio 1, quiero ordenar los inventores por año de nacimiento

let nombres = ['Pablo', 'Maria', 'Juan'];

nombres.sort();
//console.log(nombres);

let numeros = [34,12,1,100];
numeros.sort();
//console.log(numeros);

// Ejercicio 2, dado un array de numeros enteros positivos, determinar el segundo mayor
// input [3,4,6,6,5,5]; output = 5

// TDD (test driver development)

function segundoMayor (array) {
    array.sort();
    return array[array.length-2];
};

console.log(segundoMayor([3,4,6,6,5,5]) === 5);
console.log(segundoMayor([1,2,3,4,5,6]) === 5);
console.log(segundoMayor([0,4,5]) === 4);


