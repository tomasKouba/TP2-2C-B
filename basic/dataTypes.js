
//Number

let var1 = 1;
let var2 = 0;
let var3 = -0;

//console.log("1 / 0 = " + var1 / var2);
//console.log("Raiz cuadrada (-1): " + Math.sqrt(-1));


//String

let saludo1 = "Hola mundo house's";
let saludo2 = 'Hola mundo "infectado"';
let caracter = "c";
let pizza = "🍕";

//console.log(saludo2 + " quiero una " + pizza);

// backtick, comilla francesa `

/*console.log(`${saludo2} 
quiero una 
${pizza}`);*/

//null & undefined

let nulo;
//nulo = null;
//console.log(nulo);

let someNumber = 10;
let someString = "Ten";
let someBoolean = false;

//console.log("El tipo de: " + someNumber + " es " + typeof someNumber);


//Ejercicio 1
//coersion vs conversion
//probar "sumar" un numero a un string, a que tipo es convertido?
//probar "sumar" un booleano a un string, a que tipo es convertido?
//probar "sumar" un numero a un booleano, a que tipo es convertido?

let numStr = someNumber + someString;
let booStr = someBoolean + someString;
let numBoo = someNumber + someBoolean;

//console.log("La suma de numero con string es: " + numStr + " " + typeof numStr);
//console.log("La suma de booleano con string es: " + booStr + " "  + typeof booStr);
//console.log("La suma de numero con boolean es: " + numBoo + " " + typeof numBoo);

// parseo de numeros

let cadenaNumero = '34';
//console.log(typeof cadenaNumero)
//console.log(parseInt(cadenaNumero));
//console.log(typeof parseInt(cadenaNumero));

// declaracion de objetos
let actor = {
    name: "Julio",
    age: 46
};

//console.log(actor);

//acceso a las propiedades

    //acceso usando notacion corchetes []

console.log(`Nombre de actor ${actor['name']}`);

    //acceso usando notacion punto

console.log(`Nombre de actor ${actor.name}`);
