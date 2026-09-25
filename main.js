let btn = document.querySelector(".searchbtn");
let input = document.querySelector("input");

let temp = document.querySelector(".main h2");
let city = document.querySelector(".main h3");

let both = document.querySelectorAll(".box p:first-of-type");

let img = document.querySelector(".state-img img");


btn.onclick = async function () {
  try{
    if (input.value !== "") {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=11e87b0a073f706d7ee267df03dcbcbb`,
    );
    let result = await response.json();
    temp.innerHTML = `${result.main.temp}°C`;
    city.innerHTML = `${result.name}`;
    both[0].innerHTML = `${result.main.humidity} %`;
    both[1].innerHTML = `${result.wind.speed} km/h`;
    img.src = `images/${result.weather[0].main.toLowerCase()}.png`;
  }
  }
  catch(error){
   console.log(Error(error));
  }
  
};
