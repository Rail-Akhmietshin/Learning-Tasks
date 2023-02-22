let arr = ["Джаз", "Блюз"];
arr.push("Рок-н-ролл");
console.log(arr);
arr[Math.floor(arr.length / 2)] = "Классика";
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("Рэп", "Регги");
console.log(arr);