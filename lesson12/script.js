let array = [
    {
        id: 1,
        title: "BESTSELLER",
        image: "./images/p1.png",
        desc: "Trendy models of our experts, for the love of your life selected",
        price: 100
    },
     {
        id: 2,
        title: "SOLITAIRE",
        image: "./images/p2.png",
        desc: "Trendy models of our experts, for the love of your life selected",
        price: 100
    },
    {
        id: 3,
        title: "PLATINUM",
        image: "./images/p3.png",
        desc: "Trendy models of our experts, for the love of your life selected",
        price: 100
    },
    {
        id: 4,
        title: "CHEAP",
        image: "./images/p4.png",
        desc: "Trendy models of our experts, for the love of your life selected",
        price: 100
    },
]


let products = document.querySelector(".products")
let show = array.map((item) => {
    return`
    <div class="cart">
        <img src="${item.image}" alt="">
        <h3>${item.title}</h3>
        <p>Trendy models of our experts, for the love of your life selected</p>
        <button onclick="addcart(${item.id})">Discover now</button>
    </div>
    `
})
products.innerHTML = show.join('')

//------------------------------------------//

let openbtn = document.getElementById("open")
let closebtn = document.getElementById("close")
let modal = document.querySelector('.modal')

openbtn.onclick = function(){
    modal.style.display = "block"
}

closebtn.onclick = function(){
    modal.style.display = "none"
}

//------------------------------------------//

let basket = []

function addcart(id){
    let findproduct = array.find((item) => item.id === id)
    if(findproduct) {
        basket.push(findproduct)
    }
    // alert(id)
    Counter()
    showcart()
}
//------------------------------------------//
let count = document.querySelector('.count')

function Counter(){
    count.innerHTML = basket.length
}
//------------------------------------------//
let modalcart = document.querySelector('.modal-main')
function showcart() {
    let cart = basket.map((item) => {
        return`
                            <div class="mcart">
                                <img src="${item.image}" alt="">
                                <div>
                                    <span>${item.title}</span>
                                    <p>${item.price}</p>
                                    <button onclick='remove(${item.id})'>remove</button>
                                </div>
                            </div>
        `
    })
    modalcart.innerHTML = cart.join('')
}
//------------------------------------------//
function remove(id) {
   basket = basket.filter((item) => item.id !== id)
   Counter()
   showcart()
}