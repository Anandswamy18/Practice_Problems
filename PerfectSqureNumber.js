function PerfectSquare(num) {
    if (num < 0) return false; 
    const sqrt = Math.sqrt(num); 
    return sqrt === Math.floor(sqrt); 
}

function pickAndSortSquares(arr) {
    const squares = arr.filter(PerfectSquare);
    return squares; 
}

const input = [169, 145, 225, 211, 121, 183, 100, 111, 196, 214, 275];
const output = pickAndSortSquares(input);
console.log(output);  


