const API = "https://66dfd7322fb67ac16f2740dd.mockapi.io/product";
let result = document.querySelector('.result');

let modal = document.getElementById('modal');
let upTitle = document.getElementById('up-title');
let upImage = document.getElementById('up-image');
let upPrice = document.getElementById('up-price');
let saveBtn = document.getElementById('saveBtn');

let editId = null; 

async function getService() {
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
        showService(data);
    } catch (error) {
        console.log(error);
        result.innerHTML = 'not found 404';
    }
}
getService();

async function showService(data) {
    result.innerHTML = data.map((item) => {
        return `
            <div class="service">
                <img src="${item.avatar || item.image}" alt="">
                <div class="info">
                    <b>${item.name || item.title}</b>
                    <p>${item.price}</p>
                </div>
                <div class="btns">
                    <button onclick="openModal('${item.id}')" class="update">update</button>
                    <button onclick="deleteService('${item.id}')" class="delete">delete</button>
                </div>
            </div>
        `
    }).join("");
}

async function deleteService(id) {
    let check = confirm("Сиз өчүрүүнү каалайсызбы?");
    if (!check) {
        return;
    }

    try {
        const res = await fetch(`${API}/${id}`, {
            method: "DELETE"
        });
        if (res.status === 200) {
            getService();
        }
    } catch (error) {
        console.log(error);
    }
}

async function openModal(id) {
    editId = id;
    try {
        const res = await fetch(`${API}/${id}`);
        const data = await res.json();
        
        upTitle.value = data.name || data.title || '';
        upImage.value = data.avatar || data.image || '';
        upPrice.value = data.price || '';
        
        modal.style.display = 'flex';
    } catch (error) {
        console.log(error);
    }
}

function closeModal() {
    modal.style.display = 'none';
}

saveBtn.addEventListener('click', async () => {
    const updatedPayload = {
        name: upTitle.value,
        title: upTitle.value,
        avatar: upImage.value,
        image: upImage.value,
        price: upPrice.value
    };

    try {
        const res = await fetch(`${API}/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPayload)
        });

        if (res.ok) {
            closeModal();
            getService(); 
        }
    } catch (error) {
        console.log(error);
    }
});