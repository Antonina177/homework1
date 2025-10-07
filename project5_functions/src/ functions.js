
// Функція для додавання елементів масиву
function sumArray(arr) {
    let sum = 0;
    for (let item of arr) {
      // Пробуємо перетворити елемент у число
      let num = Number(item);
      // Якщо це дійсне число — додаємо до суми
      if (!isNaN(num)) {
        sum += num;
      }
    }
    return sum;
  }
  
  // Масив рядків
  const stringArray = ["10", "20", "30"];
  
  // Масив чисел
  const numberArray = [5, 15, 25, 35];
  
  // Виклики функції
  console.log("Сума рядків:", sumArray(stringArray)); // 60
  console.log("Сума чисел:", sumArray(numberArray));  // 80



  