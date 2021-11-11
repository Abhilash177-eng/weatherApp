function getWeather() {
    var location = document.getElementById('location').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f753f13d6704e8339891efce973ca65a`)
        .then((response) => response.json())
        .then((data) => {
            console.log("data", data);
            let celcius=data.main.temp;
            let location=data.name;
            let  climate=data.weather[0].description;
            let id=data.weather[0].id;
            document.getElementById('cel').innerHTML=celcius;
            document.getElementById('area').innerHTML=location;
            document.getElementById('desc').innerHTML=climate;
            document.getElementById('contentdiv').style.display="flex";
        })
}
