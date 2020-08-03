/**
 * Easy HTTP Libary
 * libary for making http request
 * 
 * @version 2.0.0 
 * @author brad
 * @license MIT
 * 
 */

class EasyHTTP {
    // Make an HTTP request 
    get(url) {
        return new Promise((resolve, reject) => {
           fetch(url)
          .then(res => res.json()) 
          .then(data => resolve(data))
          .catch(err => reject(err));
        });
    }

    //Make HTTP Post request
    post(url, data) {
        return new Promise((resolve, reject) => {
           fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
           })
          .then(res => res.json()) 
          .then(data => resolve(data))
          .catch(err => reject(err));
        });
    }


// Make an http put request

    put(url, data) {
        return new Promise((resolve, reject) => {
       fetch(url, {
        method: 'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
       })
      .then(res => res.json()) 
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
}



// Make an http DELETE request

    delete(url) {
        return new Promise((resolve, reject) => {
    fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type':'application/json'
        },
    })
    .then(res => res.json()) 
    .then(data => resolve('Resource deleted'))
    .catch(err => reject(err));
    });
    }
}