const generatePassword = (length:number):string =>{
    let capitalAlphabet:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallAlphabet:string = "abcdefghijklmnopqrstuvwxyz";
    let numbers:string = "0123456789";
    let symbols:string = "!@#$%^&*(){[<?/>}*+-\|]";
    let password:string = "";

    for (let i:number = 0; i<length; i++) {
        let allCharacters = capitalAlphabet + numbers + smallAlphabet + symbols;
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];           
    }
    return password;
}
console.log(generatePassword(10));
