let hello 
hello = 'Hello world!';
const hello3 = 'Hello world 3!'
var hello2 = 'Hello world 2!'
// console.log(hello)
// console.log(hello2)
// console.log(hello3)

// let stringVar = 'Some string'
// console.log(typeof stringVar)

// let numberVar = 2134.3435
// console.log(typeof numberVar)

// let booleanVar = true /* false */
// console.log(typeof booleanVar)

// let undefinedVar // = undefined
// console.log(typeof undefinedVar)

// let nullVar = null
// console.log(typeof nullVar)

let objectVar = {
    key1: 'Value 1',
    key2: 'Value 2'
}
console.log(typeof objectVar);
console.log(objectVar.key1)

function helloFunction(congrat) {
    return congrat + ' from function'
}

// console.log(helloFunction('Hello'))
// console.log(typeof helloFunction)
// console.log(typeof helloFunction('Hello'))

function helloUser(congrat, name) {
    return congrat + ', ' + name
}
console.log(helloUser('Hello', 'John'))
console.log(helloUser('Hello', 'Jane'))
console.log(helloUser('Привет'))

let header123 = document.getElementById('header')
header123.textContent = hello3
header123.textContent = 'Main header'

// while (true) {
//     alert('Hello world!')
// }

testFunc(1, 2, 5)
testFunc(22, 66, 85)
testFunc(100, 200, 500)

function testFunc(arg1, arg2, arg3) {
    // let arg1 = 1
    // let arg2 = 2
    // let arg3 = 5
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}


let testFunc2 = function(arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    return 'testFunc2'
}

console.log(testFunc2(1, 2, 3))

function fullName(name, lastname) {
    return name + ' ' + lastname
}

console.log(fullName('Vasia', 'Pupkin'));

// let num = 0
// let clickBtn = document.getElementById('click')
// clickBtn.onclick = function() {
//     // num++
//     // num = num + 10
//     num += 10
//     console.log('Click nums: ' + num);
// }


// let userInput = document.getElementById('username')
// let clickBtn = document.getElementById('click')
// clickBtn.onclick = function() {
//     let username = userInput.value
//     console.log('Hello, ' + username);
// }



// let header2 = document.getElementById('header2')
// let userInput = document.getElementById('username')
// let clickBtn = document.getElementById('click')
// clickBtn.onclick = function() {
//     let username = userInput.value
//     header2.textContent = username.toUpperCase()
// }



// let header2 = document.createElement('h2')
// let userInput = document.getElementById('username')
// let clickBtn = document.getElementById('click')
// clickBtn.parentElement.append(header2)

// clickBtn.onclick = function() {
//     let username = userInput.value
//     header2.textContent = username.toUpperCase()
// }

let section3 = document.getElementById('section3')
let div = document.createElement('div')
let input = document.createElement('input')
let button = document.createElement('button')

section3.append(div)
div.append(input)
div.append(button)

button.textContent = 'Click me!'
input.type = 'text'
input.style.marginRight = '20px'
input.style.borderStyle = 'solid'
input.style.borderWidth = '3px'
div.className = 'form'