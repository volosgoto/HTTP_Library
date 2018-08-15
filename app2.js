/**
 * Library for HTTP Requests
 * @version 2.0
 */

let http = new HTTP();

// let url = 'https://jsonplaceholder.typicode.com/posts';
let url = 'https://jsonplaceholder.typicode.com/users';
http.get(url)
    .then(data => console.log(data))
    .catch((err) => console.log(err));