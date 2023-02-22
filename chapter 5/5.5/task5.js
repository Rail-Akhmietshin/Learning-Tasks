let arr = ["HTML", "JavaScript", "CSS"];

function copySorted( arr ) {
    return arr.concat().sort( (a, b) => a.localeCompare(b) );
}

let sorted = copySorted(arr);

console.log( arr );
console.log( sorted );