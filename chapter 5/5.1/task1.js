let str = "Привет";

str.test = 5;

console.log(str.test);


// Можно ли добавить свойство строке?

// Нет, так как примитивы не являются объектами. Св-во будет добавлено и тут же удалено.