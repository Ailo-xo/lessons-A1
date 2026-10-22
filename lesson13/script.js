document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('number');
    const checkBtn = document.getElementById('checkBtn');
    const shapeOutput = document.getElementById('shapeOutput');

    const nameInput = document.getElementById('name');
    const sendBtn = document.getElementById('sendBtn');
    const nameOutput = document.getElementById('nameOutput');

    const savedNumber = localStorage.getItem('lastNumber');
    const savedName = localStorage.getItem('lastName');

    if (savedNumber !== null) {
        numberInput.value = savedNumber;
        renderShape(Number(savedNumber));
    }

    if (savedName) {
        nameInput.value = savedName;
        nameOutput.textContent = `Салам, ${savedName}!`;
    }

    checkBtn.addEventListener('click', () => {
        const value = Number(numberInput.value);

        if (isNaN(value)) return;

        localStorage.setItem('lastNumber', value);

        renderShape(value);
    });

    sendBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();

        if (!name) {
            nameOutput.textContent = 'Атынызды жазыныз';
        } else {
            localStorage.setItem('lastName', name);
            nameOutput.textContent = `Салам, ${name}!`;
        }
    });

    function renderShape(value) {
        shapeOutput.innerHTML = '';

        const shape = document.createElement('div');
        shape.classList.add('shape');

        if (value < 5) {
            shape.textContent = '5төн кичине';
            shape.classList.add('oval');
        } else if (value > 5) {
            shape.textContent = '5төн чоң';
            shape.classList.add('square');
        } else {
            shape.textContent = '5ке барабар';
            shape.classList.add('aval');
            shape.style.borderRadius = '250px';
        }

        shapeOutput.appendChild(shape);
    }
});

