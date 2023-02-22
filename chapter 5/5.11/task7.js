function getSecondsToTomorrow() {
    let date = new Date()

    let tommorow = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 );
    
    return Math.floor(( tommorow - date ) / 1000);
    
}


console.log(getSecondsToTomorrow());