//Complete the Weather API Backend part using openweathermap api
var search=document.querySelector('.search-box')
var button=document.querySelector('.button')
var city=document.querySelector('.city')
var date=document.querySelector('.date')
var temp=document.querySelector('.temp')
var weather=document.querySelector('.weather')
var avg=document.querySelector('.hi-low')
button.addEventListener('click',function(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=e7efa645808fbbb468e0fb5ff0f15d58')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        var cityvalue=data['name']
        var datevalue=data['timezone']
        var tempvalue=data['main']['temp']
        var weathervalue=data['weather'][0]['main']
        var avgvalue=(data['main']['temp_min']/10).toString()+" / "+(data['main']['temp_max']/10).toString()

        city.innerHTML=cityvalue
        date.innerHTML=datevalue/10
        temp.innerHTML=tempvalue/10
        weather.innerHTML=weathervalue
        avg.innerHTML=avgvalue
        
    })
    .catch(err =>alert("err"))

})

//https://api.openweathermap.org/data/2.5/weather?q=$%7BcityTextBox%7D&appid=9f7b8c8e1f0be1367b0aa72f9ee6428f%60