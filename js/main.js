// BASIC FUNCTIONS

const add = (num1,num2) => num1+num2
const subtract = (num1,num2) => num1-num2
const multiply = (num1,num2) => num1*num2
const divide = (num1,num2) => num1 / num2

const operator = (num1,num2) => add(num1,num2)

const numberBtnsAll = document.querySelectorAll('.number')
const displayedVal = document.querySelector('.display')

let num1 = 0
let num2 = 0



const storeNum = () => {
    numberBtnsAll.forEach(numbBtn => {
        numbBtn.addEventListener('click', function(){
            console.log('hey')
            num1 = numbBtn.value
            displayedVal.textContent = `${num1}`
            console.log(num1)
        })
    })
} 

storeNum()