var email = document.getElementById('email');
var password = document.getElementById('password');
var EmailError = document.getElementById('email-error');
var PassError = document.getElementById('pass-error');
email.addEventListener('input', hideError);
password.addEventListener('input', hideError);
function hideError(){
    EmailError.style.display="none";
    PassError.style.display="none";
    email.style.borderColor="";
    password.style.borderColor="";
}
function LogIn(){
  if(email.value==""){
    EmailError.style.display="block";
    EmailError.innerHTML="Enter a valid email";
    email.style.borderColor="red";
  }
  else if(password.value==''){
    PassError.style.display="block";
    PassError.innerHTML = "Enter a valid password";
    password.style.borderColor="red";
  }
  else if(email.value.length>1&&password.value.length>1){
    EmailError.style.display="none";
    PassError.style.display="none";
  }
   
}