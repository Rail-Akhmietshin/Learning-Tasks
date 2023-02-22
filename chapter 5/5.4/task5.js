function getMaxSubSum(arr) {
    let maxSum = 0;
    let maxNumber = 0;
    let currentSum = 0;

    for ( let number of arr ) {
        maxNumber = Math.max(number, maxNumber);
        currentSum += number;
        if (currentSum < 0) currentSum = 0;
        maxSum = Math.max(currentSum, maxSum);
    }
    return Math.max(maxSum, maxNumber);
}


console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));
console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))
console.log(getMaxSubSum([-1, -2, -3]));