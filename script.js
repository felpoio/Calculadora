let num1
let num2 
let operator
let displayValue = document.querySelector('#display')
let clear = document.querySelector('#clear')
let equals = document.querySelector('#equals')

function mostraDisplay(elem) {
    displayValue.textContent += elem.innerText
    console.log(elem.innerText)
}

function selecionaOperador(elem) {
    num1 = displayValue.innerText
    displayValue.innerText= ''
    operator = elem.innerText
}

equals.addEventListener('click', () => {
    num2 = displayValue.innerText
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    operate(operator, num1, num2)
})

clear.addEventListener('click', () => displayValue.innerText =  '')

function operate(operator, num1, num2) {
    if (operator === '+') {
        displayValue.innerText = num1 + num2
    } else if (operator === '-'){
        displayValue.innerText = num1 - num2
    } else if (operator === 'x'){
        displayValue.innerText = num1 * num2
    } else if (operator === '/'){
        displayValue.innerText = num1 / num2
    }
}