document.getElementById('button').addEventListener('click', loadData);

function loadData () {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open  - specfiy the type & url we want to fetch
    xhr.open('GET', '059_XHRobject.txt', true);

    //Optional - used for spinners/loaders
    xhr.onprogress = function () {
        console.log('Readystate', xhr.readyState);
    }
    
    xhr.onload = function(){
        console.log('Readystate', xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    // xhr.onreadystatechange = function() {
    //     console.log('Readystate', xhr.readyState);
    //     if(this.status === 200 & this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function() {
        console.log('request error...')
    }

    xhr.send();

    //Ready state values 
    // 0: request not initialised 
    // 1: Sever connection established 
    // 2: request recevied 
    // 3: processing request 
    // 4: request finished and response is ready
}