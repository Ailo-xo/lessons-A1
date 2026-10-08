// let counterValue = 0;

// const countSpan = document.getElementById('count');
// const plusBtn = document.getElementById('plus');
// const minusBtn = document.getElementById('minus');
// const resetBtn = document.getElementById('reset');
// const mulBtn = document.getElementById('mul');

// plusBtn.addEventListener('click', () => {
//     counterValue++;
//     updateDisplay();
// });

// minusBtn.addEventListener('click', () => {
//     counterValue--;
//     updateDisplay();
// });

// resetBtn.addEventListener('click', () => {
//     counterValue = 0;
//     updateDisplay();
// });

// mulBtn.addEventListener('click', () => {
//     counterValue *= 2;
//     updateDisplay();
// });

// function updateDisplay() {
//     countSpan.textContent = counterValue;
// }

let minus = document.getElementById('minus')
let count = document.getElementById('count')
let plus = document.getElementById('plus')
let reset = document.getElementById('reset')
let mul = document.getElementById('mul')

value = 0

plus.onclick = function(){
    value ++;
    count.innerHTML = value
}

minus.onclick = function(){
    if (value > 0)
    value --;
    count.innerHTML = value
}

reset.onclick = function(){
    value = 0;
    count.innerHTML
}

mul.onclick = function() {
    let person = prompt("Введите число")
        value *= person
        count.innerHTML = value
}