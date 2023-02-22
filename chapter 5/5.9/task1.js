let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
console.log( sumSalaries(salaries) );


function sumSalaries(salaries) {
    let sumSalaries = 0;

    for (let salary of Object.values(salaries)) {
        sumSalaries += salary;
    }

    return sumSalaries;
}