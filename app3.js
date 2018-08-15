/**
 * Library for HTTP Requests
 * @version 3.0
 */

let http = new HTTP();

// GET users 
// let url = 'https://jsonplaceholder.typicode.com/users';
// http.get(url) // method GET returns promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Add user data
// let data = {
//     "name": "new Name",
//     "username": "Bret",
//     "email": "test@test.com",
// }
// // Create POST
// let url = 'https://jsonplaceholder.typicode.com/users';
// http.post(url, data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Update User
// Add user data
// let data = {
//     "name": "Name",
//     "username": "Bt",
//     "email": "test1@test.com",
// }

// let userId = 1;
// let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

// http.put(url, data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Delete User
let userId = 1;
let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

http.delete(url)
    .then(data => console.log(data))
    .catch(err => console.log(err));