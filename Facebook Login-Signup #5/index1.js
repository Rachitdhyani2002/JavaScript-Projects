var first = document.getElementById('first');
var surname = document.getElementById('surname');
var email = document.getElementById('email');
var password = document.getElementById('password');
email.addEventListener('input', hideError);
password.addEventListener('input', hideError);
first.addEventListener('input',hideError);
surname.addEventListener('input',hideError);
function hideError(){
    email.style.borderColor="";
    password.style.borderColor="";
    first.style.borderColor="";
    surname.style.borderColor="";
}
function  signUp(){
  if(email.value==""){
    email.style.borderColor="red";
  }
  else if(password.value==''){
   password.style.borderColor="red";
  }
  else if(first.value ==""){
    first.style.borderColor="red";
  }
  else if(surname.value==""){
    surname.style.borderColor="red"
  }
  
   
}