function formatDate(date) {

    let time = {
        "year" : date.getFullYear(),
        "month" : date.getMonth(),
        "day" : date.getDate(),
        "hour" : date.getHours(),
        "minute" : date.getMinutes()
    }

    function getNormalDate(parametr) {
        return (String(time[parametr]).length > 1) ? time[parametr] : "0" + String(time[parametr]);
    }

    let now = new Date();
    let diff = (now - date) / 1000;

    if ( diff < 1) { 
        return "прямо сейчас";
    } else if ( diff < 60) {
        return `${diff} сек. назад`;
    } else if ( diff < 3600 ) {
        return `${diff / 60} мин. назад`;
    } else {
        return `
                ${getNormalDate("day")}.${getNormalDate("month")}.${getNormalDate("year")},
                ${getNormalDate("hour")}:${getNormalDate("minute")}
               `;
    }
}




console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );


console.log( new Date().getHours() );