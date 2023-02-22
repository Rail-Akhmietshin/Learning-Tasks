function getSecondsToday() {
    let date = new Date();
    
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return Math.floor(( date - today ) / 1000);
}

console.log(getSecondsToday());