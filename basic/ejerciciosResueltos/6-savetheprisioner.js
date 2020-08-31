function saveThePrisioner(n, m, s) {
    let prisioneros = Array(n);
    let caramelos = m;
    while (prisioneros.length < caramelos) {
        caramelos = caramelos - prisioneros.length;

    }
    //console.log(prisioneros);
    //console.log(caramelos);
    let result = s + caramelos - 1;
    if (result > prisioneros.length) {
        result = result - prisioneros.length
    }    
    return (result);
}

console.log(saveThePrisioner(5, 2, 1));
console.log(saveThePrisioner(7, 19, 2));
console.log(saveThePrisioner(3, 7, 3));
console.log(saveThePrisioner(5, 2, 5));

console.log(saveThePrisioner(10,2,10));

console.log(saveThePrisioner(1,1,1) === 1);
console.log(saveThePrisioner(5,2,1) === 2);
console.log(saveThePrisioner(5,2,2) === 3);
console.log(saveThePrisioner(3,7,3) === 3);
console.log(saveThePrisioner(7,19,2) === 6);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504) === 110226121);
