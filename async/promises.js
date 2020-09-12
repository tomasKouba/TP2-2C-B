// Es un objeto de ECS6+ no esta soportado en los navegadores antiguos como IE
// sirve para manipular el exito o fracaso de una operacion
// de manera mas clara que con solo callbacks

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([2,3,4,6]);
//         reject('Algo paso mal')
//     }, 2 * 1000);
// });

// doWorkPromise
//     .then(result => {
//         console.log('Exito!', result);
//     })
//     .catch(error => {
//         console.log('Error: ', error);
//     });

/// 

function resolverAlgo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('listo!');
            reject('Algo malo paso')
        }, 2 * 1000);
    });
}

async function asyncCall (){
    console.log('Llamando a promesa ...');
    const resultado = await resolverAlgo();
    console.log(resultado);
}

asyncCall();

