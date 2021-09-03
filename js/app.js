const API_KEY = `e98535d77df9b3988573827642e42b84`;

const searchTemperature = () => {
    const inputField = document.getElementById('city-name').value;
    if(inputField)
    {
        const city = document.getElementById('city-name').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    
        fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
    } 
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('feels-like', temperature.main.feels_like);
    setInnerText('weather', temperature.weather[0].main);

    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    document.getElementById('icon').setAttribute('src', url);
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
