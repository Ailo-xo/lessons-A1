// async function name() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json('')
//     return users.map((u) => u.name);
//     console.log(users);
// }
// name()

// async function main() {
//   const names = await name();  
//   console.log(names);
// }

// main();


// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) throw new Error("Сервер катасы: " + response.status);
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log("Ката чыкты:", error.message);
//   }
// }

// getUsers();


// async function getUsers(){
//     try {
//         const response = await
// fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users.map((u) => u.phone));
//     } catch (error) {
//         console.log("Ката:", error)
//     }
// }

// getUsers();

async function getUsersData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!res.ok) {
      throw new Error("Сервер катасы:", + res.status);
    }
    
    const users = await res.json();
    return users;
  } catch (error) {
    console.log("Ката чыкты:", error.message);
  }
}

async function main() {
  const users = await getUsersData();
  
  if (users) {
    const emails = users.map((u) => u.email);
    const phones = users.map((u) => u.phone);

    console.log("Emails:", emails);
    console.log("Phones:", phones);
  }
}

main();