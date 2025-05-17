"use strict"

 //варіант 2
 
function doOperation(operation) {
   const target = event.target 
   if (target.tagName === 'BUTTON') {
       const num1 = parseInt(document.getElementById('num1').value)
       const num2 = parseInt(document.getElementById('num2').value)
       let res = operation(num1, num2)
       document.getElementById('result').innerText = res
   }
}

document.getElementById('add').onclick 
 = () => doOperation((num1, num2) => num1 + num2);
document.getElementById('subtract').onclick 
 = () => doOperation((num1, num2) => num1 - num2);
document.getElementById('multiply').onclick 
 = () => doOperation((num1, num2) => num1 * num2);
document.getElementById('devide').onclick 
 = () => doOperation((num1, num2) => num1 / num2);

 //варіант 1

// // Отримуємо посилання на елементи
// const num1Input = document.getElementById('num1')
// const num2Input = document.getElementById('num2')
// const resultField = document.getElementById('result')

// // Додаємо обробники подій для кнопок
// document.getElementById('add').addEventListener('click', () => calculate('+'))
// document.getElementById('subtract').addEventListener('click', () => calculate('-'))
// document.getElementById('multiply').addEventListener('click', () => calculate('*'))
// document.getElementById('devide').addEventListener('click', () => calculate('/'))

// Основна функція обчислення
// function calculate(operator) {
//    const num1 = parseFloat(num1Input.value)
//    const num2 = parseFloat(num2Input.value)
   
//    if (isNaN(num1) || isNaN(num2)) {
//       resultField.textContent = 'Будь ласка, введіть обидва числа.'
//       return
//    }

//    let result
//    switch (operator) {
//       case '+':
//          result = num1 + num2
//          break
//       case '-':
//          result = num1 - num2
//          break
//       case '*':
//          result = num1 * num2
//          break
//       case '/':
//          if (num2 === 0) {
//          resultField.textContent = 'Помилка: ділення на нуль!'
//          return
//          }
//          result = num1 / num2
//          break
//       default:
//          result = 'Невідома операція'
//    }

//    resultField.textContent = `Результат: ${result}`
// }