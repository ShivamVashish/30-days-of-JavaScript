const button = document.querySelector('#btn-get')
button.addEventListener('click',()=>{
const place = document.querySelector('#location').value;
const pro =  fetch(`http://api.weatherapi.com/v1/current.json?key=7102d7eff799425c85f55806250510&q=${place}&aqi=yes`)
    pro
    .then((response)=>response.json())
    .then((data)=>{
    const element = document.querySelector('#weatherInfo')
        const result = `Weather Temperatur : ${data.current.temp_c} <br>  ${data.location.country} <br> Time : ${data.location.localtime}` 
        element.innerHTML = result
    })
    .catch((error)=>console.log(error))
})