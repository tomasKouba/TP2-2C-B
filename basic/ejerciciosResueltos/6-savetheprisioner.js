function saveThePrisioner(n, m, s) {
    let prisioneros = Array(n);
    let caramelos = m;
    while (prisioneros.length < caramelos) {
        caramelos = caramelos - prisioneros.length;

    }
    //console.log(prisioneros);
    //console.log(caramelos);
    console.log(s + caramelos - 1);
}

saveThePrisioner(5, 2, 1);
saveThePrisioner(7, 19, 2);
saveThePrisioner(3, 7, 3);