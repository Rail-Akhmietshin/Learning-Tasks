
let date = new Date(2012, 0, 3); 

console.log( getWeekDay(date) );  

function getWeekDay(date) {
    return (date.getDay() == 0) ? 7 : date.getDay();
}