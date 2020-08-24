function sumaArrayByReduce(array) {
    console.log(array.reduce((a, b) => a + b));
}

function sumarArrayByFor(array) {
    let cont = 0;
    for (let index = 0; index < array.length; index++) {
        cont += array[index];        
    }
    console.log(cont);
}

let ar = [-1,-2,-3];
sumarArrayByFor(ar);
sumaArrayByReduce(ar);

