function findCombinations(N, start = 1, currentCombination = []) {
    if (N === 0) {
        console.log(currentCombination.join(" "));
        return;
    }
    for (let i = start; i <= N; i++) {
        findCombinations(N - i, i, currentCombination.concat(i));
    }
}


let N = 2;
findCombinations(N);

