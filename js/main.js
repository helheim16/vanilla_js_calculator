window.onload = () => {
    const MAIN_DISPLAY = document.querySelector('.display_result');
    const LAST_OP_DISPLAY = document.querySelector('.display_input');
    const HISTORY = document.querySelector('.display_result');
    const OPERATORS = document.querySelectorAll('.operator');;
    const NUMBERS = document.querySelectorAll('.number');
    let currentInput = '';
    let lastInput;

    OPERATORS.forEach(element => {
        element.addEventListener('click', e => {
            switch (e.target.value) {
                case 'C':
                    clearDisplay();
                    break;

                case '%':
                    // appendModuleOp(e.target.value);
                    appendOperator(e.target.value)
                    break;

                case '/':
                    // appendDivisionOp(e.target.value);
                    appendOperator(e.target.value)
                    break;

                case '*':
                    // appendMultiplicationOp(e.target.value);
                    appendOperator(e.target.value)
                    break;

                case '-':
                    // appendSubtractionOp(e.target.value);
                    appendOperator(e.target.value)
                    break;

                case '+':
                    // appendAdditionOp(e.target.value)
                    appendOperator(e.target.value)
                    break;

                case '=':
                    performCalculation(e.target.value)
                    break;

                default:
                    console.log('Operador no declarado')
                    break;
            }
        });
    });

    NUMBERS.forEach(element => {
        element.addEventListener('click', e => {
            appendNumber(e.target.value);
        });
    });

    function clearDisplay() {
        console.log(lastInput)
    }

    function appendOperator(input) {
        if (validateInput(input)) {
            currentInput += input
            console.log(lastInput + ' ' + input + ' ' + validateInput(input));
            displayInput();
            lastInput = input;
        }
    }

    function appendNumber(input) {
        if (validateInput(input)) {
            currentInput += input
            console.log(lastInput + ' ' + input + ' ' + validateInput(input));
            displayInput();
            lastInput = input;
        }
    }

    function performCalculation(input) {
        //lastInput = input;
        console.log(currentInput);
    }

    function validateInput(input) {
        if (isNaN(input) && isNaN(lastInput)) {
            return false;
        }
        return true;
    }

    function displayInput() {
        MAIN_DISPLAY.innerHTML = currentInput;
    }
};