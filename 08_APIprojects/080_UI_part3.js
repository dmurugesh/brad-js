class UI {
    constructor () {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.pressure = document.getElementById('w-pressure');
        this.temp_max = document.getElementById('w-temp-max');
        this.temp_min = document.getElementById('w-temp-min');
        this.icon = document.getElementById('w-icon');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`;
        this.feelslike.textContent = `Feels like : ${weather.main.feels_like}`;
        this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;
        this.pressure.textContent = `Pressure : ${weather.main.pressure}`;
        this.temp_max.textContent = `Maximum Temperature : ${weather.main.temp_max}`;
        this.temp_min.textContent = `Minimum Temperature : ${weather.main.temp_min}`;
    }
}
