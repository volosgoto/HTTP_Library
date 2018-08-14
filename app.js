let http = new easyHTTP;

// GET request
// GET posts
// let url = 'https://jsonplaceholder.typicode.com/posts';
// http.get(url, function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log(posts);
//     }
// }); 
// // console.log(posts);


// Get single post
// let url = 'https://jsonplaceholder.typicode.com/posts/1';
// http.get(url, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log(post);
//     }
// }); 
// console.log(posts);


// POST request
// Set data
// let data = {
//     title: "Custom",
//     body: "Custom quia "
//   }; 
//  // Create Post;
//  let url = 'https://jsonplaceholder.typicode.com/posts';

//  http.post(url, data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
//  })


// PUT request
// let data = {
//     title: "Custom",
//     body: "Custom quia "
//   }; 
// let postId = 2;  

//  // UPD post;
//  let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

//  http.put(url, data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
//  })


// DELETE request
// Delete posts
let postId = 100;  
let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

http.delete(url, function (err, response) {
    if (err) {
        console.log(err);
    } else {
    console.log(response);
    }
}); 
// console.log(posts);