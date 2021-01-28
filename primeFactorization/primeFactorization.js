const isPrime = int => {
    for(let i = 2; i < int; i++) {
        if(int % i === 0) return false;
    }
    return int > 1;
}

const primeFactorization = int => {
    // Check: int not empty
    if (!int) return 'Please provide an integer';
    // Check: isInteger (not flot or other data type) - Number.isInteger(int);
    if (!Number.isInteger(int)) return 'Please provide an integer';
    // Check: Not less than 0
    if (int < 0) return 'Please provide a POSITIVE integer';

    // Solution
    let primeNumbers = [];
    for(let i = 2; i <= int; i++) {
        if(isPrime(i)) primeNumbers.push(i);
    }

    let factors = [];
    let i = 0;
    while(int > 1) {
        if (int % primeNumbers[i] === 0) {
            factors.push(primeNumbers[i]);
            int /= primeNumbers[i];
        } else {
            i++;
        }
    }
    return factors;
}

const test = {
    1: [],
    2: [2],
    3: [3],
    4: [2,2],
    6: [2,3],
    8: [2,2,2],
    9: [3,3],
    10: [2,5],
    60: [2,2,3,5]
}

Object.keys(test).forEach(key => {
    console.log(`Entry: ${key}. Result: [${primeFactorization(parseInt(key))}]. Expected: [${test[key]}]`);
})

// node primeFactorization/primeFactorization.js
