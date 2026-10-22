let input = document.getElementById('input')
let today = document.getElementById('today')
let after = document.getElementById('after')
let todayList = document.getElementById('todayList')
let futureList = document.getElementById('futureList')

function showData(){
    if (localStorage.getItem('todayData')) {
        todayList.innerHTML = localStorage.getItem('todayData')
    }
    if (localStorage.getItem('futureData')) {
        futureList.innerHTML = localStorage.getItem('futureData')
    }

    document.querySelectorAll('.remove').forEach(function(btn){
        btn.onclick = function(){
            btn.parentElement.remove()
            saveData()
        }
    })
}

function saveData(){
    localStorage.setItem('todayData', todayList.innerHTML)
    localStorage.setItem('futureData', futureList.innerHTML)
}

showData()

function addtask(list){
    let inputText = input.value.trim()

    if (inputText === "") {
        return
    }

    let textItem = document.createElement('li')
    textItem.innerHTML = `<input type="checkbox"> ${inputText} <button class='remove'>remove</button>`
    list.appendChild(textItem)
    input.value = ""

    saveData()

    textItem.querySelector(".remove").addEventListener("click", function(){
        textItem.remove()
        saveData()
    })
}

today.addEventListener("click", function(){
    addtask(todayList)
})

after.addEventListener("click", function(){
    addtask(futureList)
})