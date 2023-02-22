let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // ?      -  4, так как shoppingCart и fruits ссылаются на один и тот же объект в памяти, т.е. операции с shoppingCart эквиваленты операциям с fruits