
  
let strings = [ "кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O


function unique(arr) {
    let new_array = [];
    
    for (let string of arr ) {
        if ( !new_array.includes( string ) ) {
            new_array.push(string);
        }
    }

    return new_array
}