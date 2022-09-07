const add = (num1,num2) => num1+num2
const subtract = (num1,num2) => num1-num2
const multiply = (num1,num2) => num1*num2
const divide = (num1,num2) => num1 / num2


const operator = (operation) => operation(num1,num2)

const numberBtnsAll = document.querySelectorAll('.nums')
const displayedVal = document.querySelector('.display')
const operatorBtns = document.querySelectorAll('.operators')
const btnsTotal = document.querySelectorAll('button')
const equalBtn = document.querySelector('.equals')
let operation

let num = ""
let numHolder = []
let total

let displayOp


equalBtn.addEventListener('click', function(){
    if(num === ''){
        return
    }else if(num !== ''){
        numHolder.push(+num)
        if(numHolder[1] === "*"){
            total = numHolder[0]*numHolder[2]
            num = ""
        }else if(numHolder[1] === "/"){
            total = numHolder[0]/numHolder[2]
            num = ""
        }else if(numHolder[1] === "+"){
            total = numHolder[0]+numHolder[2]
            num = ""
        }else if(numHolder[1] === "-"){
            total = numHolder[0]-numHolder[2]
            num = ""
        }
        console.log(total)
    }
})


numberBtnsAll.forEach(numberBtn => {
    numberBtn.addEventListener('click', function(){
        num += numberBtn.value
        displayedVal.textContent = `${num}`
    })
})

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', function(){
        operation = operatorBtn.value
        if(num === "" && total === undefined){
            return
        }else if(num !== "" && total === undefined && numHolder[1] === undefined){
            numHolder.push(+num)
            numHolder.push(operation)
            displayedVal.textContent += `${operation}`
            num = ""
        }else if(numHolder[0] !== undefined && numHolder[1] !== undefined && total === undefined){
            numHolder.push(+num)
            numHolder.push(operation)
            if(numHolder[1] === "*"){
                total = numHolder[0]*numHolder[2]
                num = ""
            }else if(numHolder[1] === "/"){
                total = numHolder[0]/numHolder[2]
                num = ""
            }else if(numHolder[1] === "+"){
                total = numHolder[0]+numHolder[2]
                num = ""
            }else if(numHolder[1] === "-"){
                total = numHolder[0]-numHolder[2]
                num = ""
            }
            numHolder.shift()
            numHolder.shift()
            numHolder.shift()
            numHolder.unshift(total)
            
            displayOp = total + operation
            displayedVal.textContent = `${displayOp}`
            total = undefined

        }
        // else if(total !== undefined){
        //     console.log('heye3')
        //     // numHolder.shift().unshift(total)
        //     console.log(numHolder)
        // }
    })
})

