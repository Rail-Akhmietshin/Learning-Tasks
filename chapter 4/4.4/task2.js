
let calculator = { 
    read() {
        this.value1 = +prompt("Введите первое значение", "");
        this.value2 = +prompt("Введите второе значение", "");
    },

    sum() {
        return this.value1 + this.value2;
    },

    mul() {
        return this.value1 * this.value2;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );