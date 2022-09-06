// BASIC FUNCTIONS

const add = (num1,num2) => num1+num2
const subtract = (num1,num2) => num1-num2
const multiply = (num1,num2) => num1*num2
const divide = (num1,num2) => num1 / num2

const operator = (operation) => operation(num1,num2)

const numberBtnsAll = document.querySelectorAll('.number')
const displayedVal = document.querySelector('.display')
const operators = document.querySelectorAll('.operators')
let operation = ""

let num1 = ""
let num2 = 0
let numHolder = []




const getOperator = () => {

    let displayOp = ""
    operators.forEach(op => {
        op.addEventListener('click', function(){
            numHolder.push(num1)
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
            // storeNum2()
  
            return         
        })
        displayedVal.textContent += `${displayOp}`
        console.log(operation) 
    })



    console.log(numHolder)
}


const storeNum1 = () => {
    let num1 = ""
    numberBtnsAll.forEach(numbBtn => {
        numbBtn.addEventListener('click', function(){
            console.log('hey')
            num1 += numbBtn.value
            displayedVal.textContent = `${num1}`
            console.log(num1)
        })
    })
} 


// storeNum1()



let displayOp = ""






operators.forEach(op => {
    op.addEventListener('click', function(){
        if(num1 === ""){
            return
        }else{
        numHolder.push(num1)
        console.log(numHolder)
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
        displayedVal.textContent += `${displayOp}`
        console.log(operation) 
        storeNum1()
        return         
}})

})


if(num1 === ""){
    numberBtnsAll.forEach(numbBtn => {
        numbBtn.addEventListener('click', function(){
            num1 += numbBtn.value
            displayedVal.textContent = `${num1}`
            console.log("this is still working")
        }) 
    })
    // console.log('snacks')
    // getOp()
}


// if(operation !== ""){
//         numberBtnsAll.forEach(numbBtn => {
//             numbBtn.addEventListener('click', function(){
//                 console.log('hey')
//                 num2 = Number(numbBtn.value)
//                 displayedVal.textContent = `${num2}`
//                 console.log(num2)
//             })
//         })
// } 




















/// OTHER ATTEMPT













// BASIC FUNCTIONS

// (function (window, document, undefined) {

//     'use strict';

const add = (num1,num2) => num1+num2
const subtract = (num1,num2) => num1-num2
const multiply = (num1,num2) => num1*num2
const divide = (num1,num2) => num1 / num2

const operator = (operation) => operation(num1,num2)



const number9 = document.querySelector('.number-9')
const number8 = document.querySelector('.number-8')
const number7 = document.querySelector('.number-7')
const number6 = document.querySelector('.number-6')
const number5 = document.querySelector('.number-5')
const number4 = document.querySelector('.number-4')
const number3 = document.querySelector('.number-3')
const number2 = document.querySelector('.number-2')
const number1 = document.querySelector('.number-1')



const numberBtnsAll = document.querySelectorAll('.number')
const displayedVal = document.querySelector('.display')
const operators = document.querySelectorAll('.operators')
const btnsTotal = document.querySelectorAll('button')
let operation

let num1 = ""
let num2 = 0
let numHolder = []



const storeNum2 = () => {
    console.log("yrrrp")
    numberBtnsAll.forEach(numbBtn => {
        numbBtn.addEventListener('click', function(){
            console.log('hey')
            num2 = Number(numbBtn.value)
            displayedVal.textContent = `${num2}`
            console.log(num2)
        })
    })
} 

let displayOp

operators.forEach(op => {
    op.addEventListener('click', function(){
        if(num1 === ""){
            return
        }else{
        numHolder.push(num1)
        console.log(numHolder)
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
    //    numberBtnsAll.forEach(numberBtn => {
    //     numberBtn.removeEventListener('click', getNum)
    //    })
        number1.removeEventListener('click',getNum)
        number2.removeEventListener('click',getNum)
        number3.removeEventListener('click',getNum)
        number4.removeEventListener('click',getNum)
        number5.removeEventListener('click',getNum)
        number6.removeEventListener('click',getNum)
        number7.removeEventListener('click',getNum)
        number8.removeEventListener('click',getNum)
        number9.removeEventListener('click',getNum)
        storeNum2()
    }})

})

    // storeNum2()
    // console.log(numHolder)


let foo = ""

const getNum = (e) => {
    // console.log(e.currentTarget.value)
        num1 += e.currentTarget.value
        // console.log(num1)
        displayedVal.textContent = `${num1}`
    }


number1.addEventListener('click', getNum,false)
number2.addEventListener('click', getNum)
number3.addEventListener('click', getNum)
number4.addEventListener('click', getNum)
number5.addEventListener('click', getNum)
number6.addEventListener('click', getNum)
number7.addEventListener('click', getNum)
number8.addEventListener('click', getNum)
number9.addEventListener('click', getNum)



    // numberBtnsAll.forEach(numbBtn => {
    //     numbBtn.addEventListener('click', getNum,false)
    // })

// getOperator()

// })(window, document);