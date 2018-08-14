let http = new easyHTTP;

// Get posts
let url = 'https://jsonplaceholder.typicode.com/posts';
let posts = http.get(url, function (posts) {
    console.log(posts);
}); 

// console.log(posts);
