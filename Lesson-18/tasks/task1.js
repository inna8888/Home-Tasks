"use strict"
// Отримуємо посилання на елементи
const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const resultField = document.getElementById('result')

// Додаємо обробники подій для кнопок
document.getElementById('add').addEventListener('click', () => calculate('+'))
document.getElementById('substract').addEventListener('click', () => calculate('-'))
document.getElementById('multiply').addEventListener('click', () => calculate('*'))
document.getElementById('devide').addEventListener('click', () => calculate('/'))

// Основна функція обчислення
function calculate(operator) {
   const num1 = parseFloat(num1Input.value)
   const num2 = parseFloat(num2Input.value)
   
   if (isNaN(num1) || isNaN(num2)) {
      resultField.textContent = 'Будь ласка, введіть обидва числа.'
      return
   }

   let result
   switch (operator) {
      case '+':
         result = num1 + num2
         break
      case '-':
         result = num1 - num2
         break
      case '*':
         result = num1 * num2
         break
      case '/':
         if (num2 === 0) {
         resultField.textContent = 'Помилка: ділення на нуль!'
         return
         }
         result = num1 / num2
         break
      default:
         result = 'Невідома операція'
   }

   resultField.textContent = `Результат: ${result}`
}