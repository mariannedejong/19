//function declaration
function calculateDeclaration(number1, number2){
    let sum = ((number1*number1)+(number2*number2))*((number1*number1)+(number2*number2));
    return sum;
}

result1 = calculateDeclaration (3,4);
console.log(result1);

//function expression
const calculateExpression = function (number1, number2){
    let sum = ((number1*number1)+(number2*number2))*((number1*number1)+(number2*number2));
    return sum; 
}

result2 = calculateExpression (3,4);
console.log(result2);

//arrow function
const calculateArrow = (number1, number2) => ((number1*number1)+(number2*number2))*((number1*number1)+(number2*number2));

result3 = calculateArrow (3,4);
console.log(result3);