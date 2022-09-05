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

// const storeNum2 = () => {
//     numberBtnsAll.forEach(numbBtn => {
//         numbBtn.addEventListener('click', function(){
//             console.log('hey')
//             num2 = Number(numbBtn.value)
//             displayedVal.textContent = `${num2}`
//             console.log(num2)
//         })
//     })
// } 


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


// const storeNum1 = () => {
//     numberBtnsAll.forEach(numbBtn => {
//         numbBtn.addEventListener('click', function(){
//             console.log('hey')
//             num1 = Number(numbBtn.value)
//             displayedVal.textContent = `${num1}`
//             console.log(num1)
//             getOperator()
//         })
//     })
// } 


// storeNum1()

let displayOp = ""

numberBtnsAll.forEach(numbBtn => {
    numbBtn.addEventListener('click', function(){
        num1 += numbBtn.value
        displayedVal.textContent = `${num1}`
    })
    
})

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
        // storeNum2()
        displayedVal.textContent += `${displayOp}`
        console.log(operation) 

        return         
    }})

})

