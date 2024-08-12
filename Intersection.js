function rangeToArray(pair1, pair2) {
    const [start1, end1] = pair1;
    const [start2, end2] = pair2;
    const result1 = [];
    const result2 = [];

    for (let i = start1; i <= end1; i++) {
        result1.push(i);
    }
     
    for (let i = start2; i <= end2; i++) {
        result2.push(i);
    }

   
    const intersection = result1.filter(value => result2.includes(value));

    return intersection;
}

const pair1 = [11, 16];
const pair2 = [14, 21];
const intersection = rangeToArray(pair1, pair2);
console.log(intersection); 