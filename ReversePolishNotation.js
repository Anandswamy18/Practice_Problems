function calculateRPN(exp) {
    const stack = [];
    const tokens = exp.split(' ');

    tokens.forEach(token => {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    throw new Error(`Unknown operator: ${token}`);
            }

            stack.push(result);
        }
    });

    return stack.pop();
}


console.log(calculateRPN("3 4 +"));       
console.log(calculateRPN("3 5 + 7 2 - *")); 
console.log(calculateRPN("3 4 5 *"));    
