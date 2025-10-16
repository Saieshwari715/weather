async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'ddd050cc089f3fbb988d49c54232ec0d';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found or API issue');
        }

        const data = await response.json();

        document.getElementById('result').innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>Error fetching data. Check city name or API key.</p>`;
        console.error(error); // Optional: Log detailed error to console
    }
}
