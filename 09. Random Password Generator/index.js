const generatePassword = (length) => {
    let capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*(){[<?/>}*+-\|]";
    let password = "";
    for (let i = 0; i < length; i++) {
        let allCharacters = capitalAlphabet + numbers + smallAlphabet + symbols;
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    return password;
};
console.log(generatePassword(10));
export {};
