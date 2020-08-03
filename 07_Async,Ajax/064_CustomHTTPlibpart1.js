const http = new easyHTTP;

//Get Posts

http.get('https://jsonplaceholder.typicode.com/posts',
function(err, posts) {
    if(err) {
    console.log(posts);
    } else {
    console.log(posts);    
    }
});