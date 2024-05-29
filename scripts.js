let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const subtraction = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const division = firstNumber / secondNumber
const restDivision = firstNumber % secondNumber


const isSumOdd = (sum % 2 === 0) ? "par" : "ímpar";


const areSame = (firstNumber === secondNumber) ? "iguais" : "diferentes";

alert('Soma: ' + sum);
alert('Subtração: ' + subtraction);
alert('Multiplicação: ' + multiplication);
alert('Divisão: ' + division);
alert('Resto da Divisão: ' + restDivision);
alert('A soma dos dois números é: ' + isSumOdd);
alert('Os dois números inseridos são: ' + areSame); 