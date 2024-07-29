document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('user-input');
    let currentInput = '';
    let operator = '';
    let firstValue = '';

    const handleNumber = (number) => {
        currentInput += number;
        display.textContent = currentInput;
    };

    const handleOperator = (op) => {
        if (currentInput === '' && op !== '-') return;
        if (firstValue !== '') {
            calculate();
        }
        firstValue = currentInput;
        operator = op;
        currentInput = '';
    };

    const calculate = () => {
        if (firstValue === '' || currentInput === '') return;
        const result = eval(`${firstValue} ${operator} ${currentInput}`);
        display.textContent = result;
        firstValue = result;
        currentInput = '';
    };

    document.querySelectorAll('.numbers').forEach(button => {
        button.addEventListener('click', () => handleNumber(button.textContent));
    });

    document.querySelectorAll('.key-operate').forEach(button => {
        button.addEventListener('click', () => handleOperator(button.textContent));
    });

    document.querySelector('.key-others.operations:nth-child(1)').addEventListener('click', () => {
        display.textContent = '0';
        currentInput = '';
        firstValue = '';
        operator = '';
    });

    document.querySelector('.key-others.operations:nth-child(2)').addEventListener('click', () => {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    });

    document.querySelector('.key-operate.operations:nth-child(15)').addEventListener('click', () => {
        calculate();
        operator = '';
    });

    document.querySelector('.numbers:nth-child(16)').addEventListener('click', () => {
        handleNumber('.');
    });
});
