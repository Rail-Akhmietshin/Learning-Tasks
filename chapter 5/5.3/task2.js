function checkSpam(str) {
    let string = str.toLowerCase();

    return (string.includes('viagra') || string.includes('xxx'));
}

console.log(checkSpam('buy ViAgRA now'))// == true)
console.log(checkSpam('free xxxxx'))// == true)
console.log(checkSpam("innocent rabbit"))// == false)