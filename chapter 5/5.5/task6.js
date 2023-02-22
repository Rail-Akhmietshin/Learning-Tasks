"use strict"

function Calculator() {

    this.operations = {
        "+" : (n1, n2) => n1 + n2,
        "-" : (n1, n2) => n1 - n2,
    };

    this.calculate = function(str) {
        let arr = str.split(" ").map( (item) => ( !isNaN(item) ) ? +item : item );
        return this.operations[arr.at(1)](arr.at(0), arr.at(2));
    };

    this.addMethod = function(name, func) {
        this.operations[name] = func;
    };

}


let calc = new Calculator;

console.log( calc.calculate("3 + 7") );

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log( calc.calculate("3 * 7") );
