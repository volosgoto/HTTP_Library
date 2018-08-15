/**
 * Library for HTTP Requests
 * @version 3.0
 */

class HTTP {
    // Make HTTP GET request
    async get(url){
        const response = await fetch(url);
        const responseData = response.json();
        return responseData;
    };

    // Make HTTP POST request
    async post(url, data){
        const response = await fetch (url, {
               method: 'POST',
               headers: { 'Content-type' : 'application/json' },
               body: JSON.stringify(data)
               }
           );
           const responseData = response.json();
           return responseData;
    };

    // Make HTTP PUT request
    async put(url, data){
        const response = await fetch (url, {
               method: 'PUT',
               headers: { 'Content-type' : 'application/json' },
               body: JSON.stringify(data)
               }
           );
            const responseData = response.json();
            return responseData;
    };

    // Make HTTP DELETE request
    delete(url){
       return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'DELETE',
               headers: { 'Content-type' : 'application/json' },
               }
           )
           .then(res => res.json())
           .then(() => resolve('Resorse deleted'))
           .catch(err => reject(err))
           });
    };
}