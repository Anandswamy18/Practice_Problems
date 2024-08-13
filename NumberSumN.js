function findNumbers(n, sumN, currentNumber = "", currentSum = 0) {
    if (currentNumber.length === n) {
        if (currentSum === sumN) {
            console.log(currentNumber);
        }
        return;
    }

    for (let i = 0; i <= 9; i++) {
        if (currentNumber.length === 0 && i === 0) 
            continue; 
        if (currentSum + i <= sumN) {
            findNumbers(n, sumN, currentNumber + i, currentSum + i);
        }
    }
}


let n = 3;
let sumN = 6;
findNumbers(n, sumN);
