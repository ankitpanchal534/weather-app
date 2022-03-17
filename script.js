let inputbox = document.getElementById('input-box')
let weather = document.getElementById('show-weather')
// let wdata = []
const getTemp = () => {
    let inputValue = inputbox.value;


    // console.log(inputValue)
    if (inputValue.trim()) {
        let api = (`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=6f0e4afeb29f0077ff9c423cb1069e3e`)
        fetch(api)
            .then(res => res.json())
            .then((data) => {
                // wdata = data;
                console.log(data)
                console.log(data.name)
                // console.log(data.weather[0].main)
                const icon = data.weather[0].icon;
                weather.innerHTML = `

                <h1 id="h1__name">${data.name}</h1>
                 <p id="li__temp"> Normal : ${data.main.temp}  </p>
                <p id="li__temp_min"> Min : ${data.main.temp_min}, Max :${data.main.temp_max}    </p>
                <span> </span>
                <p  id="clouds">
                 ${data.weather[0].main}:'${data.weather[0].description},${data.clouds.all}'  
                   </p>
                   <h1><img src="http://openweathermap.org/img/w/${icon}.png" alt="icon" class="icon-img">
                   </h1>
                `
            })


    }

}




function themeManager() {
    let currentDate = new Date()
    let minutes = currentDate.getMinutes();
    let hours = currentDate.getHours();
    // let hours = 22
    let second = currentDate.getSeconds();
    // let currentTime = { hours, minutes, second }

    // console.log(currentTime)

    if (hours < 10 && hours > 6) {
        document.body.style.backgroundColor = "rgb(112, 170, 218)";
    }
    else if (hours > 10 && hours < 18) {
        document.body.style.backgroundColor = "rgb(161, 82, 18)";

    }
    else {
        document.body.style.backgroundColor = "rgb(6, 9, 12)";

    }


}
themeManager() 