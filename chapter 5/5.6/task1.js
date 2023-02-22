function unique(arr) {
    //let new_arr = new Set(arr)
    //    return Object.fromEntries(new_arr);
    return Array.from(new Set(arr));
}

let values = [
    "Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O