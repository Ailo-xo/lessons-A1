// циклдар 

// for - цикл
// while - цикл

// for (i = 0; i < 10; i++){
//     console.log('hello world' + i);
// }

// let i = 0
// while (i < 10){
//     console.log('hello world' + i);
//     i++;
// }

// == - проверка на равенство
// === - проверка на равенство и тип данных
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false

// for (i = 0; i < 10; i++){
//     if (i == 5){
//         // break;
//         continue;
//     }
//     console.log(i)
// }

// for (i = 0; i < 100; i++){
//     if (i %b2 == 0){
//         console.log(i);
//     }
// }

// умножение - 1
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + ' * ' + j + ' = ' + (i * j));
//   }
// }

// - 2
// for (i = 0; i < 10; i++){
//     for (j = 0; j < 5; j++){
//         console.log(i+'*'+j+'='+i*j);
//     }
// }

// пароль
// let password = '1234';
// let userPassword = prompt('Введите пароль');
// while (userPassword !== password){
//     userPassword = prompt('попробуйте ёще раз');
// }
// alert('вы вошли в систему');

let n = Number(prompt("Канча таблица?"));
let m = Number(prompt("Кайсы санга чейин?"));

for (let i = 1; i <= n; i++) {
    console.log("--"+i+"таблица--");
    for (let j=1; j <= m; j++) {
        console.log(i+"*"+j+"="+i*j);
    }
}
