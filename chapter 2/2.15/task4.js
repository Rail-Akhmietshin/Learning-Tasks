let x = +prompt("Введите возводимое число");
let n = +prompt("Введите возводимую степень");

function pow(x, n) {
    if (x < 1) return;
    
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return alert(result);
}

pow(x, n);