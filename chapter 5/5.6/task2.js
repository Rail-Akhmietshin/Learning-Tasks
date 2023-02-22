let mp = new Map();

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let mp = new Map();

    for (let value of arr) {
        key = Array.from(value.toLowerCase()).sort( (a, b) => a.localeCompare(b)).join("");
        mp.set(key, value);
    }

    return Array.from(mp.values());
}
  
console.log(aclean(arr));