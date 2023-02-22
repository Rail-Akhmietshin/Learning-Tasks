function randomInteger(min, max) {
    let value = Math.random() * max * min;
    (value < min) ? value = value + min : value;
    return Math.round(value);
}

console.log( randomInteger(1, 5) );

