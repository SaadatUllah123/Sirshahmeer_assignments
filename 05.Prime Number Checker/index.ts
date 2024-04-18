const prineNumCheck = (num:number):boolean=>{
    if (num < 2){
        return false
    };

    for(let i:number=2; i<num ; i++){
        if (num % i === 0) {
            return false   
        }
    };

    return true
};

let num :number = 13;

if (prineNumCheck(num)) {
    console.log(`${num} is a prime number.`)
}else{
    console.log(`${num} is not a prime number.`)
}

