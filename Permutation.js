function getPermutations(str) {
    if (str.length === 1) {
        return [str];
    }
    const permutations = [];
    for (let i = 0; i < str.length; i++) {
        
        const currentChar = str[i];

        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        
        const remainingPermutations = getPermutations(remainingChars);
        
        for (let permutation of remainingPermutations) {
            permutations.push(currentChar + permutation);
        }
    }

    return permutations;
}


const inputString = "XYZ";
const result = getPermutations(inputString);

console.log(result); 
