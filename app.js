let http = new easyHTTP;

// Get posts
let url = 'https://jsonplaceholder.typicode.com/posts1';
http.get(url, function (err, posts) {
    if (err) {
        console.log(err);
    } else {
    console.log(posts);
    }
}); 

// console.log(posts);
