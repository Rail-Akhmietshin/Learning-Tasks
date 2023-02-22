let number = +prompt("Введите число", "");

nextIteration:
for (let i = 2; i < number; i++) {
    for (let j = 2; j < i; j++) {
        if ( i % j == 0) continue nextIteration;
    }

    alert(i);    
}