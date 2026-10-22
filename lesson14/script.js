fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((users) => {
    let container = document.querySelector('.container')
    users.forEach(element => {
        container.innerHTML +=` 
        <div class= "card">
        <h1>${element.name}</h1>
        <p>${element.email}</p>
        <p>${element.phone}</p>
        <hr>
        </div>
        `
    });
    console.log(users);
})
.catch((error) => {
    console.log(error);
})