let http = new easyHTTP;

// Get posts
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
let url = 'https://jsonplaceholder.typicode.com/posts/1';
http.get(url, function (err, post) {
    if (err) {
        console.log(err);
    } else {
    console.log(post);
    }
}); 
// console.log(posts);
