function sumaMax (array) {
    array.sort((a,b)=>a-b);
    let suma = array.reduce((a,b)=>a+b);
    console.log(suma-array[0]);
    console.log(suma-array[array.length-1]);
}

let arr = [1,3,5,7,9];
sumaMax(arr);


