function ordenarMedias(array) {
    array.sort((a, b) => a - b);
    let cont = 0;
    let i = 0;
    while(i<array.length) {
        if (array[i] === array[i+1]){
            array.shift();
            array.shift();
            cont++;
        } else {
            i++;
        }     
    }    
    console.log(cont);
}



let array = [10, 20, 20, 20, 20, 30, 50, 10, 20];
ordenarMedias(array);

let arr2 = [0,1,2,6,4,5,6,0];
ordenarMedias(arr2);