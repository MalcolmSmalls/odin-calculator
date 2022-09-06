const add = (num1,num2) => num1+num2
const subtract = (num1,num2) => num1-num2
const multiply = (num1,num2) => num1*num2
const divide = (num1,num2) => num1 / num2


const operator = (operation) => operation(num1,num2)

const numberBtnsAll = document.querySelectorAll('.nums')
const displayedVal = document.querySelector('.display')
const operatorBtns = document.querySelectorAll('.operators')
const btnsTotal = document.querySelectorAll('button')
let operation

let num = ""
let numHolder = []
let total

let displayOp



numberBtnsAll.forEach(numberBtn => {
    numberBtn.addEventListener('click', function(){
        num += numberBtn.value
        displayedVal.textContent = `${num}`
        console.log(num)
    })
})

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', function(){
        operation = operatorBtn.value
        if(num === "" && total === undefined){
            return
        }else if(num !== "" && total === undefined && numHolder[1] === undefined){
            console.log('this ran')
            numHolder.push(+num)
            numHolder.push(operation)
            displayedVal.textContent += `${operation}`
            num = ""
            console.log(numHolder)
        }else if(numHolder[0] !== undefined && numHolder[1] !== undefined){
            numHolder.push(+num)
            numHolder.push(operation)
            if(operation === "*"){
                total = numHolder[0]*numHolder[2]
                num = ""
            }else if(operation === "/"){
                total = numHolder[0]/numHolder[2]
                num = ""
            }else if(operation === "+"){
                total = numHolder[0]+numHolder[2]
                num = ""
            }else if(operation === "-"){
                total = numHolder[0]-numHolder[2]
                num = ""
            }
            console.log(total)
            
            displayOp = total + operation
            displayedVal.textContent = `${displayOp}`
        }
    })
})




// const storeNum2 = () => {
//     numHolder.push(displayOp)
//     numberBtnsAll.forEach(numbBtn => {
//         numbBtn.addEventListener('click', function(){
//             console.log('hey')
//             num2 += numbBtn.value
//             displayedVal.textContent = `${num2}`
//             console.log(num2)
//         })
//     })
// } 



// operators.forEach(op => {
//     op.addEventListener('click', function(){
//         if(num1 === ""){
//             return
//         }else if (num1 !== "" && num2 !== ""){
//             numHolder.push(+num2)
//             num1 = ""
//             num2 = ""
//             if(operation === "*"){
//                 total = numHolder[0]*numHolder[2]
//                 num1 = ""
//                 num2 = ""
//             }else if(operation === "/"){
//                 total = numHolder[0]/numHolder[2]
//                 num1 = ""
//                 num2 = ""
//             }else if(operation === "+"){
//                 total = numHolder[0]+numHolder[2]
//                 num1 = ""
//                 num2 = ""
//             }else if(operation === "-"){
//                 total = numHolder[0]-numHolder[2]
//                 num1 = ""
//                 num2 = ""
//             }
//             console.log(total)
            
//             displayOp = total + operation
//             displayedVal.textContent = `${displayOp}`


        
//         }else{
//         numHolder.push(+num1)
//         console.log(numHolder)
//         operation = op.value
//         displayOp = operation
//         displayedVal.textContent += `${displayOp}`
//         storeNum2()
//     }})

// })


// let foo = ""

// const getNum = (e) => {
//         num1 += e.currentTarget.value
//         displayedVal.textContent = `${num1}`
//     }






