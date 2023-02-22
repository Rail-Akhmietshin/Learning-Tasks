let name = "Ilya";
console.log( `hello ${1}` ); // Форматирование строки с помощью обратных кавычек не работает, так как необходимо вставить название переменной (как в 3 примере). Будет выведено: 'hello 1'
console.log( `hello ${"name"}` ); // Форматирование строки с помощью обратных кавычек не работает, так как необходимо вставить название переменной (как в 3 примере). Будет выведено: 'hello name'
console.log( `hello ${name}` ); // Правильное использование. Будет выведено: 'hello Ilya'