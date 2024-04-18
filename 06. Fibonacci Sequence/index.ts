let fibonacciSequence = (num:number):number[]=> {
    let fibonaccilist:number[]=[];
    let a:number = 0;
    let b:number = 1;
    for (let i:number = 0; i<=num; i++) {
        if(i===0 || i===1){
            fibonaccilist.push(i)
        }else{
            let fibonacciNum = a+b;
            fibonaccilist.push(fibonacciNum);
            a = b;
            b = fibonacciNum
        }
    }
    return fibonaccilist;
}

let result = fibonacciSequence(10);
console.log(result);
