// Complete the isBalanced function below.
function isBalanced(s) {
    //me creo un array aux para guardar los elementos que "abren"
    let aux = [];   
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element === "{" || element === "[" || element === "("){
            //cuando abren los guardo en aux
            aux.push(element)
        } //cuando cierran, comparo si es el que corresponde al ultimo en abrir, si corresponde, lo saco de aux al ultimo
            else if (element === ")" && aux[aux.length-1] === "(") {
            aux.pop();
        } else if (element === "]" && aux[aux.length-1] === "[") {
            aux.pop();
        } else if (element === "}" && aux[aux.length-1] === "{") {
            aux.pop();
        }                 
    }
    //console.log(s);
    //console.log(aux);
    
    //si aux quedo vacio, es porque se fue balanceando bien
    //si aux quedo con algo, es porque en algun momento algun bracket no se compenso bien
    if (aux.length === 0) {
        return "YES";
    } else {
        return "NO";
    }    
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');

// Tips: Pilas
// Tips: Remplazo de cadenas