document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('buttton3').addEventListener('click', getExternal);

//Get text file data
function getText() {
    fetch('067_text.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    });
}

//Get Json file

function getJson() {
    fetch('067_post.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
}


// GEt external API data
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
}
