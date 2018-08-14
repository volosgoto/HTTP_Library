function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function (url) {
    this.http.open('GET', url, true);
     
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            console.log(self.http.responseText);
        }        
    } 
    this.http.send();
}


// Make HTTP POST request

// Make HTTP PUT request

// Make HTTP DELETE request