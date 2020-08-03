const http = new EasyHTTP;

//Get users 
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));


//User data

const data = {
    name : 'John Doe',
    username : 'johndoe',
    email : 'jode@gmail.com'
}

//Create user
// const users = http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Update post

// http.put('https://jsonplaceholder.typicode.com/users/4', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//DELETE post

http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));