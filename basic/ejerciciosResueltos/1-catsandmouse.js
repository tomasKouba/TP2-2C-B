function catAndMouse(x, y, z) {
    let a = Math.abs(z - x);
    let b = Math.abs(z - y);
    
    if (a < b) {
        console.log("Cat A");
    } else if (b < a) {
        console.log("Cat B");
    } else {
        console.log("Mouse C");
    }
}

catAndMouse(1, 2, 3);

catAndMouse(1, 3, 2);

catAndMouse(5, 15, 9999);

catAndMouse(0, 0, 0);