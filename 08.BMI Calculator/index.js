import inquirer from "inquirer";
let loopCondition = true;
while (loopCondition) {
    const bmiCalculator = (weight, height) => {
        const heightMeter = height / 100;
        const bmi = weight / (heightMeter ** 2);
        return bmi;
    };
    let userAns = await inquirer.prompt([
        {
            name: "weight",
            type: "number",
            message: "Enter your weight in KG:"
        },
        {
            name: "height",
            type: "number",
            message: "Enter your height in Centimeter:"
        }
    ]);
    let { weight, height } = userAns;
    let bmi = bmiCalculator(weight, height);
    if (weight > 0 && height > 0) {
        if (bmi < 18.5) {
            console.log(`The BMI for a weight of ${weight} kg and height of ${height} cm is: ${bmi.toFixed(2)}.`);
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log(`The BMI for a weight of ${weight} kg and height of ${height} cm is: ${bmi.toFixed(2)}.`);
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            console.log(`The BMI for a weight of ${weight} kg and height of ${height} cm is: ${bmi.toFixed(2)}.`);
        }
        else if (bmi > 30) {
            console.log(`The BMI for a weight of ${weight} kg and height of ${height} cm is: ${bmi.toFixed(2)}.`);
        }
    }
    else {
        console.log(`Invalid Input`);
    }
    ;
    let useragain = await inquirer.prompt([
        {
            name: "againCalc",
            type: "confirm",
            message: "Would you like to continue?",
            default: false
        }
    ]);
    if (!useragain.againCalc) {
        loopCondition = false;
    }
    else {
        console.clear();
    }
}
