/*module.exports.data=(name,year,qualification)=>{
    data={
        name:name,
        Year:year,
        Qualification:qualification
    }
    return JSON.stringify(data)
}*/
function userInfo(name,year,qualification){
    data={
        Name:name,
        Year:year,
        Qualification:qualification
    }
  return data
}
module.exports=userInfo
