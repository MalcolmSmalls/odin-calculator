// BASIC FUNCTIONS

const add = (num1,num2) => num1+num2
const subtract = (num1,num2) => num1-num2
const multiply = (num1,num2) => num1*num2
const divide = (num1,num2) => num1 / num2

const operator = (operation) => operation(num1,num2)

const numberBtnsAll = document.querySelectorAll('.number')
const displayedVal = document.querySelector('.display')
const operators = document.querySelectorAll('.operators')
let operation

let num1 = 0
let num2 = 0


const getOperator = () => {
    let displayOp
    operators.forEach(op => {
        op.addEventListener('click', function(){
            operation = op.value
            if(operation === "multiply"){
                displayOp = "*"
            }else if(operation === "divide"){
                displayOp = "/"
            }else if(operation === "add"){
                displayOp = "+"
            }else if(operation === "subtract"){
                displayOp = "-"
            }else{
                return
            }
            console.log(operation)
            displayedVal.textContent += `${displayOp}`
        })
    })
}


const storeNum1 = () => {
    numberBtnsAll.forEach(numbBtn => {
        numbBtn.addEventListener('click', function(){
            console.log('hey')
            num1 = Number(numbBtn.value)
            displayedVal.textContent = `${num1}`
            console.log(num1)
        })
    })
    getOperator()
} 

storeNum1()


