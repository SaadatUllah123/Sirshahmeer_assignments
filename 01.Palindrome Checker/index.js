let palindromeChecker = (inputStr) => {
    let ValueStr = inputStr.toLowerCase();
    let returnvalue = ValueStr.split("").reverse().join("");
    return ValueStr === returnvalue;
};
console.log(palindromeChecker("wow"));
console.log(palindromeChecker("push"));
console.log(palindromeChecker("repaper"));
export {};
