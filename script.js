const add = (a, b) => a+b;
const sub = (a, b) => a-b;
const mul = (a, b) => a*b;
const div = (a, b) => {
    if(b===0 || b=== "0") return 'ERROR'
    return a/b;
}

const operate = (a, c, b) => {
    a = parseFloat(a)
    b = parseFloat(b)
    if(c==='+')
        return add(a, b)
    if(c==='-') 
        return sub(a, b)
    if(c==='*')
        return mul(a, b)
    if(c==='/')
        return div(a, b)
}

document.querySelector('footer > span').textContent = `Copyright © ${new Date().getFullYear()} `;

let firstNumber="" , secondNumber="" , operator="";

const display = () => document.querySelector('main>div').textContent = `${firstNumber} ${operator} ${secondNumber}`;

const number = button => {
    if(operator==''){
        firstNumber += button.textContent;
        console.log(firstNumber, operator, secondNumber);
    }else {
        secondNumber += button.textContent;
        console.log(firstNumber, operator, secondNumber);
    }
    display();
}

const operation = button => {
    if(secondNumber==""){
        operator = button.textContent;
        console.log(firstNumber, operator, secondNumber);
    }else{
        firstNumber = `${operate(firstNumber, operator, secondNumber)}`;
        operator = button.textContent;
        secondNumber = '';
        console.log(firstNumber, operator, secondNumber);
    }
    display();
}

const equal = () => {
    if(secondNumber!=""){
        firstNumber = `${operate(firstNumber, operator, secondNumber)}`;
        secondNumber = ""
        document.querySelector('main>div').textContent = firstNumber;
    }
}

const clearDisplay = () => { 
    firstNumber = "";
    operator = "";
    secondNumber = "";
    display();
}