import * as fs from "fs"

function fileReader(filePath:string) {
    let file = fs.readFileSync(filePath,"utf-8");
    return file
};

let filePath = "file.txt";
console.log(fileReader(filePath));
