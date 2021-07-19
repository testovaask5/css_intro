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
