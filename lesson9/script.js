// let title = document.querySelector('h1')
// // let button = document.querySelectorAll("button")
// // let button = document.querySelector("button")
// let btn1 = document.querySelector("#btn1")
// let btn2 = document.getElementById("btn2")

// btn1.addEventListener('click', () => {
//     // alert("кнопка работает")
//     title.style.background = "black"
//     tit

// })


// btn2.addEventListener('click', () => {
//     document.body.style.background = 'blue'
// })


// btn3.addEventListener('click', () => {
//     document.body.style.background = 'white'
// })

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('red')) document.body.style.backgroundColor = 'red';
    if (button.classList.contains('blue')) document.body.style.backgroundColor = 'blue';
    if (button.classList.contains('green')) document.body.style.backgroundColor = 'green';
    if (button.classList.contains('yellow')) document.body.style.backgroundColor = 'yellow';
    if (button.classList.contains('purple')) document.body.style.backgroundColor = 'purple';
  });
});