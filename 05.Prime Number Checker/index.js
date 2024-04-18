const prineNumCheck = (num) => {
    if (num < 2) {
        return false;
    }
    ;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    ;
    return true;
};
let num = 13;
if (prineNumCheck(num)) {
    console.log(`${num} is a prime number.`);
}
else {
    console.log(`${num} is not a prime number.`);
}
export {};
