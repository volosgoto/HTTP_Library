/**
 * Library for HTTP Requests
 * @version 2.0
 */

 class HTTP {
     // Make HTTP GET request
     get(url){
         fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
     };

     // Make HTTP POST request
     post(){};

     // Make HTTP PUT request
     update(){};

     // Make HTTP DELETE request
     delete(){};
 }