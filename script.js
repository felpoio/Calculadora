let num1 = ''
let num2 = ''
let operator
let modoOperador = false
let isDot = false
let displayValue = document.querySelector('#display')
let clear = document.querySelector('#clear')
let equals = document.querySelector('#equals')
let deleteButton = document.querySelector('#delete')

function mostraDisplay(elem) {
    if (modoOperador === true) {
        displayValue.textContent = ''
        displayValue.textContent += elem.innerText
        modoOperador = false
    } else if (displayValue.textContent === '0') {
        displayValue.textContent = ''
        displayValue.textContent += elem.innerText
    } else {
        displayValue.textContent += elem.innerText
    }
}

function selecionaOperador(elem) {
    modoOperador = true
    if (num1 === ''){
        num1 = displayValue.innerText
        operator = elem.innerText
        console.log(num1)
    } else {
        num2 = displayValue.innerText
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        console.log(num1)
        console.log(num2)
        displayValue.innerText = operate(operator, num1, num2)
        operator = elem.innerText
        num1 = displayValue.innerText
    }
}

equals.addEventListener('click', () => {
    num2 = displayValue.innerText
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    displayValue.innerText = operate(operator, num1, num2)
    num1 = displayValue.innerText
})

clear.addEventListener('click', () => {
    displayValue.innerText =  '0'
    num1 = ''
    num2 = ''
    operator = ''
})

deleteButton.addEventListener('click', () => {
    if (displayValue.innerText !== '0'){
        if (displayValue.innerText.slice(0, -1) === ''){
            displayValue.innerText = '0'
        } else {
            displayValue.innerText = displayValue.innerText.slice(0, -1)
        }
    }
})

function operate(operator, num1, num2) {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-'){
        return num1 - num2
    } else if (operator === 'x'){
        return num1 * num2
    } else if (operator === '/'){
        return (num1 / num2).toFixed(2)
    }
}