let date = new Date(2012, 0, 3); 

console.log( getWeekDay(date) );  

function getWeekDay(date) {
    let obj = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
    return obj[date.getDay()]
}