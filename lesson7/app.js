// методы массива
// что такое массив?
// lenght - массивтин ичиндеги элементтердин саны
// push - мссивтин аягына элемент кошот
// pop - массивдин аягына элементти алып салат

// let arr = [1, 2, 3, 4, 9]
// //         0  1  2  3  4 

// arr.push(10);
// arr.pop()

// arr.unshift(0); //массивдин башына элемент кошот 
// arr.shift(); // массивдин башынан элементти алып салат

// arr.splice(1, 2); //массивдин ичиндеги элементтерди алып салат (1 - баштапкы индекс, 2 - канча жлементти алып салуу керектиги)

// arr.splice(1, 0, 5, 6); // массивдин ичиндеги элементтерди кошот (1 - баштапкы индекс, 0 - канча элементти алып салуу керектиги, 5, 6 - кошулуучу элементтер)

// arr.reverse(); // массивдин ичиндеги элементтерди тескери кылат

// console.log(arr);
// console.log(arr.length);
// console.log(arr.reduce((acc, curr) => acc + curr, 0)); // массивдин ичиндеги элементтердин суммасын чыгарат

// const doubled = arr.map((num) => num * 2);
// console.log(doubled); // [6, 16, 24, 10, 40]

// const evens = arr.filter((num) => num % 2 === 0);
// console.log(evens); 

// console.log(arr[0]); // массивдин биринчи элементин чыгарат

const numbers = Array.from({ length: 50 }, (_, index) => index + 1);

const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);      

console.log(result);