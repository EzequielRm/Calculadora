const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const expression = display.value;
        if (!expression) return;

        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}
