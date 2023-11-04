import readlinesync from "readline-sync";
const CLIcalculator = () =>{
console.log(`CLI Calculator`);
const number1=readlinesync.questionInt(`Enter the first number:-`);
console.log(number1)
const number2=readlinesync.questionInt(`Enter the second number:-`);
console.log(number2);
let option=readlinesync.question("Enter which opertion you want to perform");
switch (option){
    case "+":
        console.log(number1+number2);
        break;
    case "-":
        console.log(number1-number2);
        break; 
    case "*":
            console.log(number1*number2);
            break;
    case "/":
        console.log(number1/number2);
        break;
    default:
        console.log(`Enter a valid option`)
        break; 

}

}
CLIcalculator();