// Init Weather Object 
const weather = new Weather('Kochi', 'Kerala');

//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Thrissur', 'Kearla');

function getWeather() {
weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
}