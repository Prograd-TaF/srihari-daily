getData()
function getData(){
    
    fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })
    .catch(err =>alert("err"))
}
