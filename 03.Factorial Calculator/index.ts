const factorialCalcu = (num: number):string =>{
let factoNum:number = 1;
if (num < 0) {
    return `The factorial of a negative number is not possible: ${num}`;
}else{
    for(let i:number=1;i<=num; i++){
        factoNum *= i        
    }
    return `The factorial of a number "${num}" is: ${factoNum}`
}
};

console.log(factorialCalcu(0));
