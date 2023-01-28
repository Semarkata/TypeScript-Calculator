import multiply from "./Operations/multiply";
import substract from "./Operations/substract";
import add from "./Operations/add";
import divide from "./Operations/divide";
import prompt from "./Interface/Prompt";

const OPERATIONS = ['multiply', 'divide', 'subtract', 'add'];
const OPERATION_SYMBOL = ['+','-','*','/',];
const calculator = (a: number, b: number, operation: string) => {
    if (OPERATIONS.includes(operation)) {
        if (operation === 'multiply') return multiply(a, b);
        if (operation === 'add') return add(a, b);
        if (operation === 'subtract') return substract(a, b);
        if (b === 0) return ('Cant divide by 0! sorry!');
        if (operation === 'divide') return divide(a, b);

    } else return 'This operation cannot be found';
};

const firstValue = prompt('First number ')
const secondValue = prompt('Second second ')
const operationSymbol = prompt('Operation (+, -, *, /) ')

if (OPERATION_SYMBOL.includes(operationSymbol)) {
    let result;
    switch (operationSymbol) {
        case '+':
             result = calculator(firstValue, secondValue, 'add');
            break
        case '-':
            result = calculator(firstValue, secondValue, 'subtract');
            break
        case '*':
            result = calculator(firstValue, secondValue, 'multiply');
            break
        case '/':
            result = calculator(firstValue, secondValue, 'divide');
            break
    }
    console.log(result);
}


