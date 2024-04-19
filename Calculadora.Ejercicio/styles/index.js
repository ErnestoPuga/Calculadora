let fullOperation = '';
let result = '';

function pressButton(number) {
  console.log('hello world' + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function addition(number1, number2) {
    return number1 + number2;
  }
  
  function subtraction(number1, number2) {
    return number1 - number2;
  }
  
  function division(number1, number2) {
    if (number2 === 0) {
      return 'Error: Division by zero';
    }
    return number1 / number2;
  }

    function multiplication(number1, number2) {
    return number1 * number2;
    }

    function showNumber() {
        document.getElementById('operand1Display').innerHTML = fullOperation;
      }

      function clearResult() {
        fullOperation = '';
        showNumber();
      }
      
      function power(number1, number2) {
        return Math.pow(number1, number2);
      }      



      function calculateResult() {
        let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);
      
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
      
        switch (operador) {
          case 'x':
            fullOperation = multiplication(number1, number2);
            break;
          case '+':
            fullOperation = addition(number1, number2);
            break;
          case '-':
            fullOperation = subtraction(number1, number2);
            break;
          case '/':
            fullOperation = division(number1, number2);
            break;
          case '^':
            fullOperation = power(number1, number2);
            break;
          default:
            break;
        }
      
        showNumber();
      }