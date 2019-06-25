const digitA = prompt("Add a value");
const digitB = prompt("add a second value")

const resultAddition = parseInt(digitA) + parseInt(digitB)
const resultSubtraction = digitA - digitB
const resultMultiplication = digitA * digitB
const resultDivision = digitA / digitB

console.log(digitA)
console.log(digitB)

console.log(resultAddition)
console.log(resultSubtraction)
console.log(resultMultiplication)
console.log(resultDivision)

window.alert("Pick an operation");

switch (calc = prompt("Select A for Addition, S for Minus, M for Multiplication and D for Division")) {
    case "A":
        window.alert(resultAddition);
        break;
    case "S":
        window.alert(resultSubtraction);
        break;
    case "M":
        window.alert(resultMultiplication);
        break;
    case "D":
        window.alert(resultDivision);
}