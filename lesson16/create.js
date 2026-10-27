let input1 = document.getElementById("intitle")
let input2 = document.getElementById("inimage")
let input3 = document.getElementById("inprice")
let createbtn = document.querySelector(".inbutton")

const API = 'https://66dfd7322fb67ac16f2740dd.mockapi.io/product'

async function createService() {
    const payload = {
        name: input1.value,
        avatar: input2.value,
        price: input3.value,
    }

    try {
        const res = await fetch(API, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

createbtn.addEventListener('click', createService)

