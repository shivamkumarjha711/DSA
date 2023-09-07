// Given a positive integer 'n', determine if the number is a powerof 2 or, not

function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {        // loop tab tak chalao jab tak n greater than 1 hai
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// Big-O = O(logn)


// OR,
// BitWise Operation (Improve method)

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false