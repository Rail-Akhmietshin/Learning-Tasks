function sumInput() {
    let numbers = [];
    
    do {
        inp = prompt("Введите число", "");
        arr.push(+inp);
    } while ( !isNaN(inp) && inp !== "" && inp !== null );

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }    
    return sum;
}

alert(sumInput());
