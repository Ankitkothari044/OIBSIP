let currentValue = "";
let operator = "";
let resultElement = document.getElementById("result");

function appendValue(value) {
    currentValue += value;
    resultElement.value = currentValue;
}

function appendOperator(value) {
    operator = value;
    currentValue += operator;
    resultElement.value = currentValue;
}

function calculateResult() {
    let result = eval(currentValue);
    resultElement.value = result;
    currentValue = result.toString();
}

function clearResult() {
    currentValue = "";
    operator = "";
    resultElement.value = "";
}
