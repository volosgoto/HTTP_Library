function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function (url) {
    this.http.open('GET', url, true);
    if (this.http.status === 200) {
        this.http.onload = function () {
            
        }
    }

    
}


// Make HTTP POST request

// Make HTTP PUT request

// Make HTTP DELETE request