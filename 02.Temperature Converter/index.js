import inquirer from "inquirer";
let loopcondition = true;
while (loopcondition) {
    let userInput = await inquirer.prompt([
        {
            name: "temperature",
            type: "number",
            message: "Enter your temperature"
        },
        {
            name: "selectScale",
            type: "list",
            message: "Select the scale to convert the temperature",
            choices: ["celcius", "fahrenheit"]
        }
    ]);
    let { temperature, selectScale } = userInput;
    let fahrenToCelc = (temperature - 32) * 5 / 9;
    let celcToFahren = (9 / 5 * temperature) + 32;
    if (selectScale === "celcius") {
        console.log(`${temperature}°F is equal to the ${fahrenToCelc}°C`);
    }
    else if (selectScale === "fahrenheit") {
        console.log(`${temperature}°C is equal to the ${celcToFahren}°F`);
    }
    ;
    let userAgainInput = await inquirer.prompt([
        {
            name: "againContinue",
            type: "confirm",
            message: "Do you want to convert more temperatures?",
            default: false
        }
    ]);
    if (userAgainInput.againContinue) {
        console.clear();
    }
    else {
        loopcondition = false;
    }
}
