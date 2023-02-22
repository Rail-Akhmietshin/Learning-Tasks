function shuffle(array) {
    let numbers = [];
    let new_array = array.concat();
    for (let i = 0; i < array.length; i++) {
        let random = Math.floor(Math.random() * (array.length))
        if ( !numbers.includes(random) ) {
            array[i] = new_array.at(random);
            numbers.push(random);
        } else i--;
    }
    return array;
}

// проверка на одинаковую вероятность создания массива со случайным набором чисел


let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    count[shuffle(array).join('')]++;
}

for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
