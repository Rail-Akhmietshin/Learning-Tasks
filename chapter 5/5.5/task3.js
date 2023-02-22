function filterRangeInPlace(arr, a, b) {
    return arr.filter( (item, index, array) => (item >= a && item <= b) ? item : array.splice(index, 1) );
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log( arr );