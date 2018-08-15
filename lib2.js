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
     post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify(data)
                }
            )
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
            });
     };

     // Make HTTP PUT request
     put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify(data)
                }
            )
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
            });
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
            .then(data => resolve('Resorse deleted'))
            .catch(err => reject(err))
            });
     };
 }