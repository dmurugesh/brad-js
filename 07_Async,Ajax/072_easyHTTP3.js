/**
 * Easy HTTP Libary
 * libary for making http request
 * 
 * @version 3.0.0 
 * @author brad
 * @license MIT
 * 
 */

class EasyHTTP {
    // Make an HTTP request 
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    //Make HTTP Post request
    async post(url, data) {
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
           })

           const resData = await response.json();
        return resData;
        }
    

// Make an http put request

    async put(url, data) {

        const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
       });
       const resData = await response.json();
        return resData;
    }



// Make an http DELETE request

    async delete(url) {
        const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type':'application/json'
        }
    });
    const resData = await "Resouse deleted...";
    return resData;
}

}

