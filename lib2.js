/**
 * Library for HTTP Requests
 * @version 2.0
 */

 class HTTP {
     // Make HTTP GET request
     get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
            });
     };

     // Make HTTP POST request
     post(){};

     // Make HTTP PUT request
     update(){};

     // Make HTTP DELETE request
     delete(){};
 }