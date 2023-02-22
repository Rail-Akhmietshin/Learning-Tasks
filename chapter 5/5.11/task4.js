let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


function getDateAgo(date, day) {
    let new_date = new Date(date);
    new_date.setDate( new_date.getDate() - day ); 
    return new_date.getDate();
}