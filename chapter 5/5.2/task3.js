function readNumber() {
    let number;
    do {
        number = prompt("Введите число!", "");
        
        if (number === null || number === "") return null;

    } while (!isFinite(number))

    alert(number);
    return +number
}

readNumber()