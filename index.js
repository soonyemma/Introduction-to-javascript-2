alert("Welcome to Basic Arithmetic Calculator!");
const operator = prompt("What operation would you like to perform(+, -, *, or /)?\n");
const number1 = parseFloat(prompt("Enter first number:\n"));
const number2 = parseFloat(prompt("Enter second number:\n"));

let result;

if(operator === "+"){
    result = number1 + number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
}else if(operator === "-"){
    result = number1 - number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
}else if(operator === "*"){
    result = number1 * number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
}else if(operator === "/"){
    result = number1 / number2;
    alert(`${number1} ${operator} ${number2} = ${result}`);
}else {
    alert("Invalid operator.");
}

alert("Bye!");
