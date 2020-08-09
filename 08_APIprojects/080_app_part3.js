// Init Weather Object 
const weather = new Weather('Kochi', 'Kerala');
//init UI 
const ui = new UI();

//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Thrissur', 'Kearla');

function getWeather() {
weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}