class Weather {
    constructor(city, state) {
        this.apiKey = '78c5c9df78fdc30a0ec9ad309dc7a86a'
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();
        return responseData;
    }

    // change weather location

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
} 
