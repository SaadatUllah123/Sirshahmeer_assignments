"use strict";
let fibonacciSequence = (num) => {
    let fibonaccilist = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i <= num; i++) {
        if (i === 0 || i === 1) {
            fibonaccilist.push(i);
        }
        else {
            let fibonacciNum = a + b;
            fibonaccilist.push(fibonacciNum);
            a = b;
            b = fibonacciNum;
        }
    }
    return fibonaccilist;
};
let result = fibonacciSequence(10);
console.log(result);
