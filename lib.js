function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
     
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            // console.log(self.http.responseText);
            return callback(null, self.http.responseText); // null for error
        } else {
            return callback('Error: ' + self.http.status);
        }       
    } 
    this.http.send();
}


// Make HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'aplication/json');
    
    let self = this;

    this.http.onload = function () {
            return callback(null, self.http.responseText);
        }
    


    this.http.send(JSON.stringify(data));
    
}


// Make HTTP PUT request

// Make HTTP DELETE request