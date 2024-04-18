const factorialCalcu = (num) => {
    let factoNum = 1;
    if (num < 0) {
        return `The factorial of a negative number is not possible: ${num}`;
    }
    else {
        for (let i = 1; i <= num; i++) {
            factoNum *= i;
        }
        return `The factorial of a number "${num}" is: ${factoNum}`;
    }
};
console.log(factorialCalcu(0));
export {};
