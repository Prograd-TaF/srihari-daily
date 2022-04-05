// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkUserName(){
    var name=document.getElementById('usertext').value;
    if(name==""){
        var error=document.getElementById('name_error')
        error.innerHTML=`
        <p>user name shouldn't be empty</p>`
    }
    else if(name.length<8 || name.length>15){
        
        document.getElementById('name_error').innerHTML=`
        <p>length should be between 8 to 15</p>`
    }
    else if((/[!\@\#\$\%\^\&]/).test(name)){
        document.getElementById('name_error').innerHTML=`
        <p>no special characters are allowed</p>`
    }
    else if((/[\s]/).test(name)){
        document.getElementById('name_error').innerHTML=`
        <p>no spaces are allowed</p>`
    }
    else{
        document.getElementById('name_error').innerHTML=`
        <p>True</p>`
    }
}
function checkEmail(){
    var mail=document.getElementById('emailtext').value;
    var errMail=document.getElementById('email_error')
    if((/[!\#\$\%\^\&\*\(\)\-\+\=\,\<\>\?\;\:\"\']/).test(mail)){
        errMail.innerHTML=`
        <p>false</p>`
    }
    else if(!(/[a-zA-Z0-9]/).test(mail)){
        errMail.innerHTML=`
        <p>false</p>`
    }
    else{
        errMail.innerHTML=`
        <p>true</p>` 
    }
}
function checkPassword(){
    var pass=document.getElementById('passwordtext').value
    var errPass=document.getElementById('password_error')
    if(pass.search(/[A-Z]/)==-1){
        errPass.innerHTML=`
        <p>Atleast one upper case</p>`
    }
    else if(pass.search(/[0-9]/)==-1){
        errPass.innerHTML=`
        <p>Atleast one number</p>`
    }
    else if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_]/)==-1){
        errPass.innerHTML=`
        <p>Atleast one special character</p>`
    }
    else if(!(/[a-zA-Z0-9]/).test(pass)){
        errPass.innerHTML=`
        <p>false</p>`
    }
    else{
        errPass.innerHTML=`
        <p>True</p>`
    }
}
function validate(){
    checkUserName()
    checkEmail()
    checkPassword()
}