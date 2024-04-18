"use strict";
const anagramCheck = (firstInput, secondInput) => {
    if (firstInput.length !== secondInput.length) {
        return `Please enter words of the same length. Note that ${firstInput} and ${secondInput} do not have the same length.`;
    }
    ;
    let firstSortStr = firstInput.toLowerCase().split("").sort().join("");
    let secondSortStr = secondInput.toLowerCase().split("").sort().join("");
    if (firstSortStr === secondSortStr) {
        return `${firstInput} and ${secondInput} are anagrams`;
    }
    else {
        return `${firstInput} and ${secondInput} are not anagrams`;
    }
};
console.log(anagramCheck("heart", "earth"));
