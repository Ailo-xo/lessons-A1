let current = "";
let operator = "";
let first = "";

const display = document.getElementById("current");
const previous = document.getElementById("previous");

document.querySelectorAll(".number").forEach(btn => {
    btn.onclick = () => {
        current += btn.textContent;
        display.textContent = current;
    };
});

document.querySelectorAll(".operator").forEach(btn => {
    btn.onclick = () => {
        first = current;
        operator = btn.textContent;
        current = "";
        previous.textContent = first + " " + operator;
    };
});

document.querySelector('[data-action="equals"]').onclick = () => {
    let a = Number(first);
    let b = Number(current);
    let result;

    if (operator === "+") result = a + b;
    if (operator === "−") result = a - b;
    if (operator === "×") result = a * b;
    if (operator === "÷") result = b === 0 ? "Ошибка" : a / b;

    current = result;
    display.textContent = result;
};

document.querySelector('[data-action="clear"]').onclick = () => {
    current = "";
    first = "";
    operator = "";
    display.textContent = "0";
    previous.textContent = "";
};

document.querySelector('[data-action="delete"]').onclick = () => {
    current = current.slice(0, -1);
    display.textContent = current || "0";
};

document.querySelector('[data-action="percent"]').onclick = () => {
    current = Number(current) / 100;
    display.textContent = current;
};

document.querySelector('[data-action="sign"]').onclick = () => {
    current = -Number(current);
    display.textContent = current;
};